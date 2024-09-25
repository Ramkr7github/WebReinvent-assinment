import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../redux/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const response = await axios.post('https://reqres.in/api/login', { email, password });
      dispatch(loginSuccess({ user: email, token: response.data.token }));
      navigate('/dashboard');
    } catch (err) {
      dispatch(loginFailure(err.response.data.error));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-300">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <div className="flex justify-center text-2xl font-bold text-gray-800 p-4">
          <a href="/"><img src="https://webreinvent.com/images/logo-webreinvent.svg" alt="MyLogo" className="h-10 bg-indigo-600" /></a>
        </div>
        
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mb-3">{error}</p>}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input type="email" className="w-full border px-3 py-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold">Password</label>
          <input type="password" className="w-full border px-3 py-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
