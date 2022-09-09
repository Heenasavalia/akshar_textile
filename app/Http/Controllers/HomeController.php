<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function HomeImageForm()
    {
        return view('akshar.home_img_frm');    
    }
}
