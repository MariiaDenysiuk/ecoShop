@extends('admin.main')
@section('content')
    <table>
        <tr>
            <td>id</td>
            <td>Миниатюра</td>
            <td>Название</td>
            <td>Действие</td>
            <td>Действие</td>
        </tr>
        @foreach ($products as $product)
            <tr>
                <td>{{$product->id}}</td>
                <td><img width=20 height=20 src="{{$product->img2}}"></td>
                <td>{{$product->name}}</td>
                <td> <a href="{{action('ProductsController@edit',['products'=>$product->id])}}">Изменить</a></td>
                <td> <form method="POST" action="{{action('ProductsController@destroy',['products'=>$product->id])}}">
                        <input type="hidden" name="_method" value="delete"/>
                        <input type="hidden" name="_token" value="{{csrf_token()}}"/>
                        <input type="submit" value="Удалить"/>
                    </form>
                </td>
            </tr>
            @endforeach
            </ul>
            @if(Session::has('message'))
                {{Session::get('message')}}
            @endif
    </table>
@endsection