function rotateListInPlace(list, k) {
    const len = list.length;
    k = k % len;
  
    for (let i = 0; i < k; i++) {
      const temp = list[0]; //  Zapisz pierwszy element listy w zmiennej tymczasowej.
      for (let j = 0; j < len - 1; j++) {  // Przesuń wszystkie pozostałe elementy listy o jedną pozycję w lewo.
        list[j] = list[j + 1]; // Umieść przechowywany element na końcu listy.
      }
      list[len - 1] = temp;
    }
    
    return list;
  }
  
  const list = [1, 2, 3, 4, 5, 6];
  const k = 2;
  rotateListInPlace(list, k);
  console.log(list);
  


