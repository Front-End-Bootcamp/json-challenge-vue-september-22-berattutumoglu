[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=8464281&assignment_repo_type=AssignmentRepo)
# js-template

Paylaşmış olduğum [JSON](https://github.com/Front-End-Bootcamp/vue-bootcamp/blob/d6f881aec77f15a4107eafc10f6a91e90f9268a4/homework%201/data.json) dosyasında bulunan kişileri ve asistanları gruplamanız gerekiyor. 

Aşağıdaki gibi bulunan JSON dosyasının;
```
	{
		"name": "",
		"id": "",
		"group": "SteelBlue",
		"type": null
	},
	{
		"name": "",
		"id": "",
		"group": "SteelBlue",
		"type": "assistant"
	}
```

Aşağıda belirtilen şeklinde veya benzer yapıda düzenlenmesi gerekiyor

```
	{
		"group": "SteelBlue",
		"student": [name, name]
		"assistant": "name"
	},
```

veya

```
	{
		"SteelBlue": {
			"student": [name, name]
			"assistant": "name"
		}
	}
```

Çalışma sonunda belirlenen fonsiyonlar çağırıldığında JSON verisinin düzenlenmiş haliyle çıktısının alınması gerekiyor.

Örneğin: ```getGroup("SteelBlue")``` fonsiyonu çağrıldığında çıktısının yukarıda belirtilen sonuçlardan birinin veya benzerinin olması gerekiyor.

**Not:** Çalışma sonucu için sadece filter ile seçilen grup üyelerinin filtrelenmesi değil. Tüm JSON objesinin düzenlenmesi gerekmekte.

Kullanılabilecek bazı fonsiyon isim önerileri;
```filterByGroupName()```
```getGroupStudents```

Ek olarak ```getGroups``` fonksiyonu ile tüm JSON düzenlenmiş haliyle console da görüntülenebilinir.


_Herhangi bir arayüz hazırlanması zorunlu değildir. İsteğe göre eklenebilinir._
