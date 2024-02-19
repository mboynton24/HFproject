const SignUp = () => {
    return (
      <div className="h-screen flex justify-center items-center" style={{ backgroundColor: '#4d0000' }}>
        <form class="mx-auto max-w-xl">
          <form action="" class="space-y-5">
          <h1 style={{ color: 'white' }}>Register</h1>
          <div>
        <label for="email" class="mb-1 block text-sm font-medium text-white">Email</label>
         <input type="email" id="example1" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-white" placeholder="you@email.com" required />
        </div>
            <div>
              <label for="username" class="mb-1 block text-sm font-medium text-white">Username</label>
              <input type="text" id="example1" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Username" required />
            </div>
            <div>
            <label for="password" class="mb-1 block text-sm font-medium text-white">Password</label>
            <input type="password" id="example2" class="block w-full rounded-md border-white-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 placeholder-white-500" placeholder="Password" />
            </div>
            <button type="submit" class="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Sign Up</button>
          </form>
        </form>
      </div>
    );
  }
  
  export default SignUp;