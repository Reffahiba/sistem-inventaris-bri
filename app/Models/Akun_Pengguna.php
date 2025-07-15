<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Akun_Pengguna extends Model
{
    use HasFactory;

    protected $guarded = ['id_user'];
    protected $table = 'user';
    protected $fillable = ['nama_user', 'email', 'telepon', 'password', 'id_divisi', 'id_role'];

    public function divisi(){
        return $this->belongsTo(Divisi::class, 'id_divisi');
    }

    public function role(){
        return $this->belongsTo(Role::class, 'id_role');
    }

    public function getUser($id_user = null){
        if($id_user !== null){
            return $this->select('user.nama_user')->where('user.id', $id_user)->first();
        }
    }
}
