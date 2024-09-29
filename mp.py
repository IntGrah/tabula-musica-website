from collections import *
from typing import *


def compute_max_flow(capacity: Dict[Tuple[str, str], int], s: str, t: str):
    flow_value = 0
    flow: Dict[Tuple[str, str], int] = {}
    for u, v in capacity:
        flow[u, v] = flow[v, u] = 0
    while True: # Find augmenting path
        q = deque([s])
        prev = {s: None}
        while q:
            if t in prev: break
            cur = q.popleft()
            for u, v in flow:
                if u == cur and v != s and v not in prev and flow[u, v] < capacity.get((u, v), 0):
                    prev[v] = u
                    q.append(v)
        else: # No path found
            return flow_value, {e: flow[e] for e in capacity if flow[e] > 0}, prev.keys()
        v = t # Get the path
        path = []
        while u := prev[v]:
            path.append((u, v))
            v = u
        df = min(capacity.get(e, 0) - flow[e] for e in path)
        flow_value += df
        for u, v in path: # Augment the flow by as much as possible
            flow[u, v] += df
            flow[v, u] -= df
