<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    <title>Document</title>
</head>
<body class="bg-[url('{{ asset('assets/img/Pattern.png') }}')] bg-cover bg-center w-screen">
    <div class="container mx-auto bg-yellow-50 h-screen flex justify-center items-center">
        <div class="w-full max-w-4xl">
            <div class="bg-blue-100 rounded-xl overflow-hidden flex shadow-2xl border border-blue-500">
                <div class="w-3/4 justify-center items-center">
                    
                </div>
                <div class="w-1/2 justify-center items-center">
                    <div class="flex flex-col justify-center items-center mr-3 mt-5">
                        <h1>LOGIN</h1>
                        {{-- <form action="{{ route('proses-login') }}" method="POST"> --}}
                            @csrf
                            <div class="flex flex-col justify-center items-center">
                                <input type="username" name="username" id="username" placeholder="Masukkan Username" class="outline-none px-3 py-2 rounded-full my-2 text-center">
                                <input type="password" name="password" id="password" placeholder="Masukkan Password" class="outline-none px-3 py-2 rounded-full my-2 text-center">
                                <button type="submit" class="bg-white text-blue-600 text-lg rounded-full my-3 px-6 font-semibold">LOGIN</button>
                            </div>
                        {{-- </form> --}}
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>
</html>