<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'first_name'=> 'Kimly',
            'last_name'=>'Nhep',
            'username'=> 'Roselyn',
            'email'=>'kimly@gamil.com',
            'password'=>Hash::make('p@ssword'),
        ]);
    }
}
