import { client } from './dbconnect.js';
import { ObjectId } from 'mongodb';

// Get all news from DB
export const getNews = async (req, res) => {
    try {
        await client.connect();
        const collection = client.db('allfunds_test').collection('news');
        const result = await collection.find().toArray();
        res.json(result);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send(err);
    } finally {
        await client.close();
    }
};

// Delete new from DB
export const deleteNew = async (req, res) => {
    const newIdToDelete = req.params.id;
    try {
        await client.connect();
        const collection = client.db('allfunds_test').collection('news');
        // Delete element by id
        const result = await collection.deleteOne({
            _id: ObjectId.createFromHexString(newIdToDelete),
        });
        // If one element was deleted, return response indicating the operation successfully executed
        if (result) {
            res.status(200).json({
                message: 'Selected new deleted successfully',
            });
        } else {
            res.status(404).json({ message: 'News item not found' });
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send(err);
    } finally {
        await client.close();
    }
};

export const updateNew = async (req, res) => {
    const idToFind = req.params.id;
    const newToUpdate = req.body;
    try {
        await client.connect();
        const collection = client.db('allfunds_test').collection('news');
        // use the document id to find the element in db that has to be updated and pass the new state of said element

        const result = await collection.findOneAndUpdate(
            { _id: ObjectId.createFromHexString(idToFind) },
            { $set: newToUpdate }
        );

        if (result) {
            res.status(200).json({
                message: 'New document was updated successfully',
            });
        } else {
            res.status(404).json({ message: 'Document not found' });
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send(err);
    } finally {
        await client.close();
    }
};
