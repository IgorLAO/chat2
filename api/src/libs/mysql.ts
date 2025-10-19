import mysql from 'mysql2/promise';
async function NewMysql(mysqlConfig?: any){
    const con = await mysql.createConnection({
        host: '',
        user: 'remoto2',
        database: 'TESTES',
        password: '',
    // port: process.env.MYSQL_PORT ?? '3306',
    })
    

    return con
}

export async function Select(table: string, columns: string, where?: string, joins?: string) {
    const sql = await NewMysql()

    const [res] =  await sql.query(
        `SELECT ${columns} 
            FROM ${table} 
            ${where ? `WHERE ${where}`: ''}
            ${joins ? `WHERE ${joins}`: ''}`
    )

    return res
}



export async function Insert(table: string, columns: string, values: string) {
    const sql = await NewMysql()

    const [res] =  await sql.query(
        `INSERT INTO ${table}
        (${columns})
            VALUES ( ${values})`
    )
  
    return res
}

