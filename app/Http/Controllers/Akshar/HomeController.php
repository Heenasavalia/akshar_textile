<?php

namespace App\Http\Controllers\Akshar;

use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('akshar.auth:akshar');
    }

    /**
     * Show the Akshar dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index() {
        return view('akshar.home');
    }
}
