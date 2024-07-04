/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

const Content = () => {
  const [data, setData] = useState({ date: "", amount: "", category: "", id: "" });
  const [total, setTotal] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.trim() !== "") {
      setData({ ...data, [name]: value, id: Math.random().toString(36).substring(2, 9) });
    } else {
      alert("All fields are required");
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.date.trim() !== "" && data.amount.trim() !== "" && data.category.trim() !== "") {
      const newExpense = { ...data };
      setExpenses([...expenses, newExpense]);
      setData({ date: "", amount: "", category: "", id: "" });
    } else {
      alert("Please fill  all the fields.");
      return;
    }
  };

  const handleDelete = (id) => {
    const newExpense = expenses.filter(item => item.id !== id);
    setExpenses(newExpense);
  };

  useEffect(() => {
    const newTotal = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
    setTotal(newTotal);
  }, [expenses]);

  return (
    <div className='w-[600px] flex flex-col items-center justify-center'>
      <form className='shadow-md w-[400px]' onSubmit={handleSubmit}>
        <div className='flex flex-col p-4 gap-5'>
          <input
            onChange={handleChange}
            name='date'
            className='outline-none rounded-md  border p-2'
            type="date"
            value={data.date}
          />
          <input
            onChange={handleChange}
            name='amount'
            className='outline-none rounded-md  border p-2'
            type="text"
            value={data.amount}
            placeholder='Please Enter a amount'
          />
          <select
            onChange={handleChange}
            name='category'
            className='outline-none rounded-md  border p-2'
          >
            <option defaultValue>Select Category</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="Entertainment"> Entertainment</option>
            <option value="other"> Other</option>
          </select>

          <button className='bg-blue-600 rounded-md hover:bg-blue-800 p-2 text-white'>
            Add Expense
          </button>
        </div>
      </form>

      <div className='expenss w-[400px] h-auto shadow-lg mt-4 p-2  font-semibold'>
        <h3 className='text-1xl'>Expenses</h3>
        <hr />
        {expenses.length > 0 &&
          expenses.map((item, index) => {
            return (
              <div className='mt-3 flex  justify-between' key={index}>
                <span>{item.date} {item.amount} {item.category}</span>
                <button onClick={() => handleDelete(item.id)} className='p-1 text-xs bg-orange-800 rounded-md text-white'>Delete</button>
              </div>
            );
          })}
      </div>
      <div className='summery w-[400px] h-[100px] shadow-lg mt-3 p-2  font-semibold'>
        <h3 className='text-1xl'>Summary</h3>
        <hr />
        <span className=''>Total Expenses: {total}</span>
      </div>
    </div>
  );
};

export default Content;
