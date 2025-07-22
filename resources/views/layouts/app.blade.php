<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sistem Manajemen Inventaris Logistik - Bank BRI KC Tanjung Karang</title>
  @vite(['resources/css/app.css'])
</head>
<body class="overflow-hidden h-screen bg-gray-100 text-gray-900">

  <main>
    @yield('content')
  </main>

  @stack('scripts')
</body>
</html>
