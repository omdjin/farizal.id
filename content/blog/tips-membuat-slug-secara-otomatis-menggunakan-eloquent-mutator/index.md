---
title: Tips membuat slug secara otomatis menggunakan Eloquent Mutator
date: "2017-11-08T12:40:32.169Z"
description: Salah satu tips untuk framework Laravel yang sering digunakan.
---

![Laravel Eloquent Mutator Tutorial](./laravel-eloquent-mutator.jpg)

Seringkali kita membutuhkan slug untuk digunakan pada url. Biasanya sebuah slug kita buat dari attribut/field name atau title dari table menggunakan function `str_slug()`. Contohnya :

```php
<?php
$brand = new Brand;
$brand->name = $request->input('name');
$brand->slug = str_slug($request->input('name'));
$brand->save();
?>
```

Menggunakan kode di atas sebenarnya benar, dan sudah bagus, karena umumnya begitulah caranya. Namun dengan menggunakan cara di atas, kita harus menyimpan slug dengan menggunakan `str_slug()` tiap kali ada modifikasi di title, misalnya di proses add dan proses edit. Kalo di halaman add kita pakai cara di atas, di halaman edit pun attribut slug harus disimpan pakai cara di atas juga.

Nah di sini saya mau ngasih tips supaya kita hanya cukup memanggil fungsi `str_slug(`) sekali saja, tanpa harus khawatir lupa menggunakannya di proses add, edit, maupun proses lain yg melakukan perubahan pada field/attribut name. Caranya adalah dengan menggunakan fitur Mutator pada laravel eloquent. Dengan mutator, memungkinkan kita untuk melakukan format/perubahan pada "attribute value" ketika kita menyimpannya pada instance model/eloquent.

Contoh agar slug otomatis tersimpan dan terformat ketika kita menyimpan name brand, caranya adalah dengan menambahkan mutator `setNameAttribute` pada model Brand.

```php
<?php
/* app/Brand.php */
namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
     /**
     * Create the slug from the name
     */
     public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = str_slug($value);
    }
}
```

Dengan penambahan kode di atas, kita tidak perlu menyimpan dan memformat slug ketika kita membuat atau mengubah Brand, karena slug akan secara otomatis tersimpan dan terformat menggunakan fungsi `str_slug()`.

Lalu, bagaimana jika field yg kita gunakan bukan `name`, tapi misalnya menggunakan `title` atau `first_name`? Mutator pada eloquent menggunakan "cased name" dari field/attribute yg ingin kita format. Jika kita menggunakan `title`, maka functionnya akan menjadi `setTitleAttribute`, atau jika menggunakan `first_name`, maka functionnya akan menjadi `setFirstNameAttribute`.

Demikian tips membuat slug secara otomatis menggunakan eloquent mutator pada framework Laravel. Jika anda punya tips lain yang lebih efisien, yuk kita diskusikan di Twitter
