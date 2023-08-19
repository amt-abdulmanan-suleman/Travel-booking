import { Request, Response } from 'express';
import db from '../db';


export const createFlight =async (req: Request, res: Response) => {
    try {
        const columns = Object.keys(req.body).join(', ');
        const placeholders = Object.keys(req.body).map((_, index) => `$${index + 1}`).join(', ');

        const insertQuery = `INSERT INTO flights (${columns}) VALUES (${placeholders}) RETURNING *`;
        const values = Object.values(req.body);

        const {rows} = await db.query(insertQuery, values);

        res.json({ success:true, message: 'Flight created successfully.', data:rows[0] });
    } catch (err) {
        console.error('Error adding accommodation:', err);
        res.status(500).json({ error: 'An error occurred while creating new flight.' });
    }

}


export const getAllFlights = async (req: Request, res: Response) => {
   
    try {
        const {rows: flights} = await db.query('select * from flights')

        res.status(200).json({success: true, data: flights})
    } catch (error) {
        res.status(500).json({success: false, message:'Internal server error'})
    }
}

export const getFlight = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const {rows: flight} = await db.query('select * from flights where id=$1',[id])

        res.status(200).json({success: true, data: flight[0]})
    } catch (error) {
        res.status(500).json({success: false, message:error})
    }
}

export const getUserFlights = async (req: Request, res: Response) => {
    const {user_id} = req.params
    try {
        const {rows: flight} = await db.query('select * from flights where business_id=$1',[user_id])

        res.status(200).json({success: true, data: flight})
    } catch (error) {
        res.status(500).json({success: false, message:error})
    }
}

export const updateFlight =async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updateColumns = Object.keys(updates).map((key, index) => {
            return `${key} = $${index + 1}`;
        }).join(', ');

        const updateValues = Object.values(updates);

        const updateQuery = `UPDATE flights SET ${updateColumns} WHERE id = $${updateValues.length + 1} RETURNING *`;
        const values = [...updateValues, id];

        const{rows: updatedFlight} = await db.query(updateQuery, values);

        res.status(200).json({ success:true, message: 'flight updated successfully.', data: updatedFlight[0] });
    } catch (err) {
        console.error('Error updating flight info:', err);
        res.status(500).json({success:false, message: 'An error occurred while updating flight info.' });
    }
}

export const deleteFlight = async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        await db.query('delete from flights where id=$1',[id])

        res.status(200).json({success: true, message: 'item deleted'})
    } catch (error) {
        res.status(500).json({success: false, message: 'Internal server error'})
    }
}