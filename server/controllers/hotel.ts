import { Request, Response } from 'express';
import db from '../db';


export const createHotel =async (req: Request, res: Response) => {
    try {
        const columns = Object.keys(req.body).join(', ');
        const placeholders = Object.keys(req.body).map((_, index) => `$${index + 1}`).join(', ');

        const insertQuery = `INSERT INTO hotels (${columns}) VALUES (${placeholders}) RETURNING *`;
        const values = Object.values(req.body);

        const {rows} = await db.query(insertQuery, values);

        res.json({ success:true, message: 'Hotel created successfully.', data:rows[0] });
    } catch (err) {
        console.error('Error adding accommodation:', err);
        res.status(500).json({ error: 'An error occurred while creating new hotel.' });
    }

}


export const getAllHotels = async (req: Request, res: Response) => {
   
    try {
        const {rows: hotels} = await db.query('select * from hotels')

        res.status(200).json({success: true, data: hotels})
    } catch (error) {
        res.status(500).json({success: false, message:'Internal server error'})
    }
}

export const getHotel = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const {rows: hotel} = await db.query('select * from hotels where id=$1',[id])

        res.status(200).json({success: true, data: hotel[0]})
    } catch (error) {
        res.status(500).json({success: false, message:error})
    }
}

export const getUserHotels = async (req: Request, res: Response) => {
    const {user_id} = req.params
    try {
        const {rows: hotel} = await db.query('select * from hotels where business_id=$1',[user_id])

        res.status(200).json({success: true, data: hotel})
    } catch (error) {
        res.status(500).json({success: false, message:error})
    }
}

export const updateHotel =async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updateColumns = Object.keys(updates).map((key, index) => {
            return `${key} = $${index + 1}`;
        }).join(', ');

        const updateValues = Object.values(updates);

        const updateQuery = `UPDATE hotels SET ${updateColumns} WHERE id = $${updateValues.length + 1} RETURNING *`;
        const values = [...updateValues, id];

        const{rows: updatedHotel} = await db.query(updateQuery, values);

        res.status(200).json({ success:true, message: 'hotel updated successfully.', data: updatedHotel[0] });
    } catch (err) {
        console.error('Error updating hotel info:', err);
        res.status(500).json({success:false, message: 'An error occurred while updating hotel info.' });
    }
}

export const deleteHotel = async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        await db.query('delete from hotels where id=$1',[id])

        res.status(200).json({success: true, message: 'item deleted'})
    } catch (error) {
        res.status(500).json({success: false, message: 'Internal server error'})
    }
}