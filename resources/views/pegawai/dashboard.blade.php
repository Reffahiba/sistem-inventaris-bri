@extends('layouts.app')

@section('content')

  <div id="react-dashboard"></div>
  <div class="flex justify-center my-8">
    <div id="banner-carousel"></div>
  </div>

@endsection
@viteReactRefresh
@push('scripts')
  @vite('resources/js/banner.jsx')
  @vite('resources/js/app.jsx')
@endpush
