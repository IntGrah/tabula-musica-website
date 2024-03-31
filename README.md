# tm

## Run (dev)

```bash
npm run dev
```

Open `localhost:3000`

Set `.env`

```
NODE_ENV=development
DATABASE_URL=mysql://root:<password>@localhost:3306/tm
```

Login to MySQL, then
```
mysql> source prisma/tm.sql
```
to populate the database with test entries
