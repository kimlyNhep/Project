<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admins')->insert([
            'first_name'=> 'Kimly',
            'last_name'=>'Nhep',
            'username'=> 'The23th',
            'email'=>'kimly@gamil.com',
            'password'=>Hash::make('p@ssword'),
        ]);
    }
}
