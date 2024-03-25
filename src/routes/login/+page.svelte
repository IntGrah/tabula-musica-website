<div class="p-32">
	<form method="POST" action="?/login">
		<input type="email" name="email" placeholder="Email" required />
		<br />
		<input type="password" name="password" placeholder="Password" value="password" required />
		<br />
		<button>Log in</button>
	</form>
	<br />
	<form method="POST" action="?/signup">
		<input type="email" name="email" placeholder="Email" value="newuser@example.com" required />
		<br />
		<input type="password" name="password" placeholder="Password" value="password" required />
		<br />
		<input
			type="password"
			name="confirmPassword"
			placeholder="Confirm password"
			value="password"
			required
		/>
		<br />
		<input type="text" name="name" placeholder="Name" value="Jane Doe" required />
		<br />
		Would you like to subscribe to our mailing list?
		<br />
		<input type="checkbox" name="mailingList" />
		<br />
		<button>Sign up</button>
	</form>
</div>
