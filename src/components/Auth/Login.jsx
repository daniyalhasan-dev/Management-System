import { useState } from "react";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        handleLogin(email,password);

        setEmail("");
        setPassword("");
        
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000000] px-4">
      <div className="w-full max-w-md bg-[#1c1c1c] rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-10 text-center">
          Sign in
        </h1>

        <form onSubmit={(e)=> {submitHandler(e)}} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 text-gray-300 font-medium text-sm inline-block"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
              placeholder="john@example.com"
              required
              className="w-full placeholder:text-gray-400 rounded-md border border-gray-300 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 text-gray-300 font-medium text-sm inline-block"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder="••••••••"
              required
              className="w-full placeholder:text-gray-400 rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;