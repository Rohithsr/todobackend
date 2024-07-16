// Example route for creating a task
app.post('/tasks', (req, res) => {
    const { title, dueDate } = req.body;
    pool.query('INSERT INTO tasks (title, due_date) VALUES (?, ?)', [title, dueDate], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error creating task' });
        return;
      }
      res.status(200).json({ message: 'Task created successfully' });
    });
  });
  