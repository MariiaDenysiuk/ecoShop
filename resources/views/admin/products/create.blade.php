@extends('admin.main')

@section('content')

    <form method="POST" action="{{action('ProductsController@store')}}" enctype="multipart/form-data">

        Title:<br>
        <input type="text" name="name"><br>
        Vendor Code:<br>
        <input type="text" name="vendorCode"><br>
        Price:<br>
        <input type="text" name="price"><br>
        Quantity:<br>
        <input type="text" name="count"><br>
        Description:<br>
        <textarea name="description"></textarea><br>
        Short description:<br>
        <textarea name="shortDescription"></textarea><br>

        Small img:<br>
        <input type="file" name="img1"><br>
        Big img:<br>
        <input type="file" name="img2"><br>

        <input type="hidden" name="_token" value="{{csrf_token()}}">
        <input type="submit" value="Сохранить">
    </form>
@endsection