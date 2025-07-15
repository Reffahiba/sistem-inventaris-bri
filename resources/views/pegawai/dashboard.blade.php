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
<body class="h-screen flex flex-col">
    <div id="react-navbar"></div>

    <div class="flex flex-1">
        <div id="react-sidebar" class="w-64"></div>

        <main class="flex-1 p-6">
            <h1 class="text-xl font-bold">Halaman Dashboard</h1>
            <p>Konten dashboard akan tetap bisa ditulis dari Blade.</p>
        </main>
    </div>
</body>

</html>