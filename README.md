# tm

## Run

```bash
npm run dev
```


```
# /.env
DATABASE_URL="mysql://root:<password>@localhost:3306/tm"
```

Login to MySQL, then
```
mysql> source prisma/tm.sql
```
to populate the database with test entries
