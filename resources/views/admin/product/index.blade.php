@extends('akshar.layouts.akshar_layout')

@section('content')
<div class="content-wrapper">

    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Dashboard</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Product</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>


    <section class="content">
        <div class="container-fluid">

         <div class="row">
             <div class="col-md-6">

                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Upload Product</h3>
                    </div>


                    <form class="" method="POST" action="{{ url('submit_product_img') }}">
                                <meta name="_token" content="{!!csrf_token()!!}">
                        <div class="card-body">
                            
                            <div class="form-group">
                                <label for="exampleInputFile">File input</label>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="product_image" name="product_image">
                                        <label class="custom-file-label" for="product_image">Choose file</label>
                                    </div>
                                    <!-- <div class="input-group-append">
                                        <span class="input-group-text">Upload</span>
                                    </div> -->
                                </div>
                            </div>
                          
                        </div>

                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>

                </div>




            </div>
        </div>

    </div>
</section>

</div>
@endsection
