import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import wgh from '../images/wgh.jpg'; // Ensure the image path is correct

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [gender, setGender] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    if (!height || !weight || !gender) {
      toast.error("Please enter height, weight, and gender");
      return;
    }

    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning("You are underweight. Consider seeking advice from healthcare professionals.");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You have a normal weight. Keep maintaining a healthy and balanced lifestyle.");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.success("You are absolutely fit.");
    } else {
      toast.error("You are in an obese lifestyle. It is recommended to seek advice from healthcare consultants.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${wgh})` }} // Set the image as background
    >
      <form
        onSubmit={calculateBMI}
        className="bg-white p-8 rounded-lg shadow-md w-96 bg-opacity-90" // Add bg-opacity for better readability
      >
        <h1 className="text-2xl font-bold mb-6 text-center">BMI Calculator</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Height (cm)</label>
          <input
            type="number"
            placeholder="Enter your height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Weight (kg)</label>
          <input
            type="number"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Gender</label>
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold">Your BMI: {bmi}</h2>
          </div>
        )}
      </form>
    </div>
  );
};

export default BMICalculator;