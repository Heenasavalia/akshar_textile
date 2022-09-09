<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class AdminLoginController extends Controller
{
    public function index()
    {
        return view('admin.admin_login');
        // return view('akshar_login');
    }

    public function login(Request $request)
    {
        
        $admin = Admin::where('email', $request->email)->where('password', $request->password)->first();
        dd($admin);
        if($admin)
        {
            $admin_id = $admin->id;
              $request->session()->put('admin_id', $admin_id);
               $request->session()->put('admintype', "1");
            return redirect('dashboard');
        }
        // else{
        //     return redirect('akshar_login');
        // }
      
    }
}
