import mysql, { type RowDataPacket } from 'mysql2/promise';
import type { PlataError, SqlResult } from './types/typesPlata.ts';
async function NewMysql(mysqlConfig?: any) {
    const con = await mysql.createConnection({
        host: '129.151.35.14',
        user: 'remoto2',
        database: 'TESTES',
        password: 'ViadoDoBeco2',
        // port: process.env.MYSQL_PORT ?? '3306',
    })


    return con
}

let err: PlataError
err = {
    ErrorID: undefined,
    erro: undefined
}


export async function Select<T>(table: string, columns: string, where?: string, joins?: string, extras?: string): Promise<SqlResult<T>> {
    const sql = await NewMysql()
    let rows: RowDataPacket[] = []

    try {
        const res = await sql.query<RowDataPacket[]>(
            `SELECT ${columns} 
            FROM ${table} 
            ${where ? `WHERE ${where}` : ''}
            ${extras ? `ORDER BY ${extras}` : ''}`
            //${joins ? `WHERE ${joins}`: ''}
        )
        rows = res[0]
    } catch (error) {
        err = {
            ErrorID: 'BLINSERT001',
            erro: error
        }
    }

    if (rows === undefined)
        return {error: err}
   
    const typeres = rows as T

    return {
        values: typeres,
        error: err
    }
}

export async function Insert<T>(table: string, columns: string, values: string): Promise<SqlResult<T>> {
    const sql = await NewMysql()
    let rows: RowDataPacket[] = []


    try {
        const res = await sql.query<RowDataPacket[]>(
            `INSERT INTO ${table}
        (${columns})
            VALUES ( ${values})`
        )
        rows = res[0]
    } catch (error) {
        err = {
            ErrorID: 'BLINSERT001',
            erro: error
        }
    }
  
    if (rows === undefined)
        return {error: err}
   
    const typeres = rows as T

    return {
        values: typeres,
        error: err
    }
}

