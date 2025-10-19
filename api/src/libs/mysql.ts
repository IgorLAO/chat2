import mysql from 'mysql2/promise';

export async function NewMysql(mysqlConfig?: any){
    const con = await mysql.createConnection({
        host: process.env.MYSQ_HOST ?? '',
        user: process.env.MYSQL_USER ?? '',
        database: process.env.MYSQL_DB ?? ''
    })

    return con
}

export async function Select(table: string, columns: string, where?: string) {
    const sql = await NewMysql()

    const [res] =  await sql.query(
        `SELECT ${columns} \
            FROM ${table} \
            where ${where ? `WHERE ${where}`: ''}`
    )

    return res
}