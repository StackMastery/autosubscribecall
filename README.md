
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form with Code Output</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap">
  <style>
    * {
      font-family: 'Space Grotesk', sans-serif ;
    }
  </style>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-4">

  <div class="bg-white border border-indigo-500  rounded-lg p-6 sm:p-8 max-w-4xl w-full flex flex-col md:flex-row">
    
    <div class="w-full md:w-1/2 mb-6 md:mb-0 md:pr-4">
      <h2 class="text-2xl font-bold mb-4">Input Form</h2>
      <form class="space-y-4" id="formChanel">
        <div>
          <label for="input" class="block text-sm font-medium text-gray-700">Input Chanel Username *</label>
          <input type="url" id="inputUri" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="@username">
        </div>
        <button type="submit" class="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Submit</button>
      </form>
    </div>

    <div class="w-full md:w-8/12 bg-indigo-500  rounded-lg p-6 shadow-inner">
      <h2 class="text-2xl font-bold mb-4 text-white">Auto Sub Call Link</h2>
      <div class="bg-sky-100 p-4 rounded-lg text-sm font-mono">
        <p id="outputTab" class="break-words" >
          Youtube Auto Subscribe Link Here
        </p>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
