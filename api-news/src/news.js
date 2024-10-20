import { client } from './dbconnect.js';

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
    const newTitleToDelete = req.params.title;
    try {
        await client.connect();
        const collection = client.db('allfunds_test').collection('news');
        // Delete element by title
        const result = await collection.deleteOne({ title: newTitleToDelete });
        // If one element was deleted, return response indicating the operation successfully executed
        if (result.deletedCount === 1) {
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
    const newToUpdate = req.body;
    try {
        await client.connect();
        const collection = client.db('allfunds_test').collection('news');
        // use the title to find the element in db that has to be updated and pass the new state of said element

        const result = await collection.updateOne(
            { title: newToUpdate.title },
            { $set: newToUpdate }
        );

        if (result.modifiedCount === 1) {
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
