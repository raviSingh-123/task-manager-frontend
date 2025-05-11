import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function Dashboard() {
  const token = localStorage.getItem('token');
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTask, setEditingTask] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [viewingTask, setViewingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${config.API_URL}/api/v1/task/gettasks`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data && res.data.success && Array.isArray(res.data.message)) {
        setTasks(res.data.message);
      } else {
        console.error('Invalid response format:', res.data);
        setTasks([]);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async () => {
    if (!newTask.title) return alert('Title is required');
    try {
      await axios.post(`${config.API_URL}/api/v1/task/createtask`, newTask, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNewTask({ title: '', description: '' });
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`${config.API_URL}/api/v1/task/deletetask/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEditClick = (task) => {
    setEditingTaskId(task._id);
    setEditingTask({ title: task.title, description: task.description });
  };

  const handleUpdateTask = async (id) => {
    try {
      await axios.put(`${config.API_URL}/api/v1/task/updatetask/${id}`, editingTask, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setEditingTaskId(null);
      setEditingTask({ title: '', description: '' });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Task Manager Dashboard</h2>

        {/* Add Task Form */}
        <div className="space-y-3 mb-6">
          <input
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <input
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            Add Task
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              {editingTaskId === task._id ? (
                <div className="w-full space-y-2">
                  <input
                    className="w-full border border-gray-300 p-2 rounded-md"
                    value={editingTask.title}
                    onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                  />
                  <input
                    className="w-full border border-gray-300 p-2 rounded-md"
                    value={editingTask.description}
                    onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUpdateTask(task._id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingTaskId(null)}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-1">{task.description}</p>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-4 flex gap-2">
                    <button
                      onClick={() => setViewingTask(task)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleEditClick(task)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* View Task Modal */}
        {viewingTask && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full">
              <h3 className="text-xl font-bold mb-4">{viewingTask.title}</h3>
              <p className="text-gray-700 mb-6 whitespace-pre-wrap">{viewingTask.description}</p>
              <div className="flex justify-end">
                <button
                  onClick={() => setViewingTask(null)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
