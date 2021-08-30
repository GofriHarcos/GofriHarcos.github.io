function jatek(a)
{
	with(Math)
	{
		gep=floor(random()*3+1);
		if(a==4)
		{
			document.getElementById('szoveg').innerHTML="Válassz fegyvert!";
			document.body.style.background = "white";
		}
		else if(a==gep)
		{
			document.getElementById('szoveg').innerHTML="Döntetlen!";
			document.body.style.background = "white";
		}
		else if(gep==1)
			{
				if(a==2)
				{
					document.getElementById('szoveg').innerHTML="Nyertél kakifej :)";
					document.body.style.background = "green";
				}
				else
				{
					document.getElementById('szoveg').innerHTML="Vesztettél te kis pömpölő :(";
					document.body.style.background = "red";
				}
			}
		else if(gep==2)
		{
			if(a==1)
				{
					document.getElementById('szoveg').innerHTML="Vesztettél te kis pömpölő :(";
					document.body.style.background = "red";
				}
			else
				{
					document.getElementById('szoveg').innerHTML="Nyertél kakifej :)";
					document.body.style.background = "green";
				}
		}
		else
		{
			if(a==1)
				{
					document.getElementById('szoveg').innerHTML="Nyertél kakifej :)";
					document.body.style.background = "green";
				}
			else
				{
					document.getElementById('szoveg').innerHTML="Vesztettél te kis pömpölő :(";
					document.body.style.background = "red";
				}
		}
	}
}