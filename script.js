  const textarea = document.getElementById('inputNumbers');
  const clearBtn = document.getElementById('clearBtn');
  const outputDiv = document.getElementById('output');
  const storageKey = 'inputNumbersValue';
  const toggleBtn = document.getElementById('toggle-gallery');
  const gallery = document.getElementById('gallery');


    document.getElementById('instruction-toggle').addEventListener('click', function(event) {
      event.preventDefault();
      var container = document.getElementById('instruction-container');
      container.classList.toggle('open');
    });



// При загрузке страницы восстанавливаем значение из localStorage
  window.addEventListener('load', () => {
    const savedValue = localStorage.getItem(storageKey);
    if (savedValue !== null) {
      inputNumbers.value = savedValue;
      processInput(); // Выполняем обработку сразу
    }
  });

  // Сохраняем значение в localStorage при вводе
  inputNumbers.addEventListener('input', () => {
    localStorage.setItem(storageKey, inputNumbers.value);
    processInput(); 
  });

  // Обработка введённых чисел
  function processInput() {
    const numbers = inputNumbers.value.split(/[\s,]+/).map(Number);
    outputDiv.innerHTML = `<pre>${JSON.stringify(numbers, null, 2)}</pre>`;
  }

  // Очистка поля ввода и localStorage
  clearBtn.addEventListener('click', () => {
    inputNumbers.value = '';
    localStorage.removeItem(storageKey);
    outputDiv.innerHTML = ''; // Очищаем вывод
  });



        toggleBtn.addEventListener('click', () => {
            gallery.classList.toggle('hidden');
            toggleBtn.textContent = gallery.classList.contains('hidden') 
                ? 'Показать' 
                : 'Скрыть';
        });

 
  // База данных
        const data = [
  { ID: 1, CLASS: "Alkanes", Struct: "RCH<sub>2</sub>CH<sub>3</sub>", LO: 2850, HI: 3000, Second: null, Intensity: "s", Assign: "CH stretch", Follow: "1,2,3,4,164,172", Help: "7", Show: "1" },
  { ID: 2, CLASS: "Alkanes", Struct: "RCH<sub>2</sub>CH<sub>3</sub>", LO: 1450, HI: 1470, Second: null, Intensity: "s", Assign: "CH<sub>2</sub> and CH<sub>3</sub>", Follow: "1,2,3,4,164,172", Help: "7", Show: "1" },
  { ID: 3, CLASS: "Alkanes", Struct: "RCH<sub>2</sub>CH<sub>3</sub>", LO: 1370, HI: 1380, Second: null, Intensity: "s", Assign: "CH<sub>2</sub> and CH<sub>3</sub>", Follow: "1,2,3,4,164,172", Help: "7", Show: "1" },
  { ID: 4, CLASS: "Alkanes", Struct: "RCH<sub>2</sub>CH<sub>3</sub>", LO: 720, HI: 725, Second: null, Intensity: "m", Assign: "bending modes", Follow: "1,2,3,4,164,172", Help: "7", Show: "1" },
  { ID: 5, CLASS: "Alkenes", Struct: "RCH=CH<sub>2</sub>", LO: 3040, HI: 3140, Second: null, Intensity: "m", Assign: "=C—H stretch", Follow: "5,6,7,8,9,10,11", Help: "8", Show: "1" },
  { ID: 6, CLASS: "Alkenes", Struct: "RCH=CH<sub>2</sub>", LO: 1650, HI: 1660, Second: null, Intensity: "m", Assign: "C=C stretch", Follow: "5,6,7,8,9,10,11", Help: "8", Show: "1" },
  { ID: 7, CLASS: "Alkenes", Struct: "RCH=CH<sub>2</sub>", LO: 905, HI: 915, Second: 990, Intensity: "s", Assign: "=CH out of plane", Follow: "5,6,7,8,9,10,11", Help: "8", Show: "1" },
  { ID: 8, CLASS: "Alkenes", Struct: "RCH=CH<sub>2</sub>", LO: 985, HI: 995, Second: 910, Intensity: "s", Assign: "=CH out of plane", Follow: "5,6,7,8,9,10,11", Help: "8", Show: "1" },
  { ID: 9, CLASS: "Alkenes", Struct: "R<sub>2</sub>C=CH<sub>2</sub>", LO: 3080, HI: 3140, Second: null, Intensity: "s", Assign: "=C—H stretch", Follow: "5,6,7,8,9,10,11", Help: "8", Show: "1" },
  { ID: 10, CLASS: "Alkenes", Struct: "R<sub>2</sub>C=CH<sub>2</sub>", LO: 1645, HI: 1655, Second: null, Intensity: "m", Assign: "C=C stretch", Follow: "5,6,7,8,9,10,11", Help: "8", Show: "1" },
  { ID: 11, CLASS: "Alkenes", Struct: "R<sub>2</sub>C=CH<sub>2</sub>", LO: 885, HI: 895, Second: null, Intensity: "s", Assign: "=CH out of plane", Follow: "5,6,7,8,9,10,11", Help: "8", Show: "1" },
  { ID: 12, CLASS: "Alkenes", Struct: "trans RCH=CHR", LO: 3015, HI: 3025, Second: null, Intensity: "w", Assign: "=C—H stretch", Follow: "12,13,14", Help: "8", Show: "1" },
  { ID: 13, CLASS: "Alkenes", Struct: "trans RCH=CHR", LO: 1655, HI: 1665, Second: null, Intensity: "m", Assign: "C=C stretch", Follow: "12,13,14", Help: "8", Show: "1" },
  { ID: 14, CLASS: "Alkenes", Struct: "trans RCH=CHR", LO: 675, HI: 725, Second: null, Intensity: "m", Assign: "=CH out of plane", Follow: "12,13,14", Help: "8", Show: "1" },
  { ID: 15, CLASS: "Alkenes", Struct: "3-ring", LO: 1637, HI: 1645, Second: null, Intensity: "w", Assign: "C=C stretch", Follow: "15", Help: "8", Show: "1" },
  { ID: 16, CLASS: "Alkenes", Struct: "4-ring", LO: 1561, HI: 1571, Second: null, Intensity: "w", Assign: "C=C stretch", Follow: "16", Help: "8", Show: "1" },
  { ID: 17, CLASS: "Alkenes", Struct: "5-ring", LO: 1606, HI: 1616, Second: null, Intensity: "w", Assign: "C=C stretch", Follow: "17", Help: "8", Show: "1" },
  { ID: 18, CLASS: "Alkenes", Struct: "6-ring", LO: 1644, HI: 1654, Second: null, Intensity: "w", Assign: "C=C stretch", Follow: "18", Help: "8", Show: "1" },
  { ID: 19, CLASS: "Alkenes", Struct: "7-ring", LO: 1646, HI: 1656, Second: null, Intensity: "w", Assign: "C=C stretch", Follow: "19", Help: "8", Show: "1" },
  { ID: 20, CLASS: "Alkenes", Struct: "8-ring", LO: 1648, HI: 1658, Second: null, Intensity: "w", Assign: "C=C stretch", Follow: "20", Help: "8", Show: "1" },
  { ID: 21, CLASS: "Alkenes", Struct: "cis RCH=CHR", LO: 3015, HI: 3025, Second: null, Intensity: "w", Assign: "=C—H stretch", Follow: "21,22,23", Help: "8", Show: "1" },
  { ID: 22, CLASS: "Alkenes", Struct: "cis RCH=CHR", LO: 1670, HI: 1680, Second: null, Intensity: "w", Assign: "C=C stretch", Follow: "21,22,23", Help: "8", Show: "1" },
  { ID: 23, CLASS: "Alkenes", Struct: "cis RCH=CHR", LO: 965, HI: 975, Second: null, Intensity: "s", Assign: "=C—H out of plane", Follow: "21,22,23", Help: "8", Show: "1" },
  { ID: 24, CLASS: "Alkenes", Struct: "R<sub>2</sub>C=CHR", LO: 3015, HI: 3025, Second: null, Intensity: "w", Assign: "=C—H stretch", Follow: "24,25,26", Help: "8", Show: "1" },
  { ID: 25, CLASS: "Alkenes", Struct: "R<sub>2</sub>C=CHR", LO: 1665, HI: 1675, Second: null, Intensity: "w", Assign: "C=C stretch", Follow: "24,25,26", Help: "8", Show: "1" },
  { ID: 26, CLASS: "Alkenes", Struct: "R<sub>2</sub>C=CHR", LO: 790, HI: 840, Second: null, Intensity: "s", Assign: "=CH out of plane", Follow: "24,25,26", Help: "8", Show: "1" },
  { ID: 27, CLASS: "Alkenes", Struct: "R<sub>2</sub>C=CR2", LO: 1665, HI: 1675, Second: null, Intensity: "vw", Assign: "C=C stretch", Follow: "27", Help: "8", Show: "1" },
  { ID: 28, CLASS: "Alkynes", Struct: "RC#C—H", LO: 3270, HI: 3330, Second: null, Intensity: "s", Assign: "#C—H stretch", Follow: "28,29,30", Help: "9", Show: "1" },
  { ID: 29, CLASS: "Alkynes", Struct: "RC#CH", LO: 2100, HI: 2140, Second: null, Intensity: "m", Assign: "C#C stretch", Follow: "28,29,30", Help: "9", Show: "1" },
  { ID: 30, CLASS: "Alkynes", Struct: "RC#CH", LO: 600, HI: 700, Second: null, Intensity: "s", Assign: "#C—H bend", Follow: "28,29,30", Help: "9", Show: "1" },
  { ID: 31, CLASS: "Alkynes", Struct: "RC#CR", LO: 2190, HI: 2260, Second: null, Intensity: "vw", Assign: "C#C stretch", Follow: "31", Help: "9", Show: "1" },
  { ID: 32, CLASS: "Alkyl halides", Struct: "R—F", LO: 1000, HI: 1350, Second: null, Intensity: "s", Assign: "C—F stretch", Follow: "32,169", Help: "10", Show: "1" },
  { ID: 33, CLASS: "Alkyl halides", Struct: "R—Cl", LO: 750, HI: 850, Second: null, Intensity: "s", Assign: "C—Cl stretch", Follow: "33,169", Help: "10", Show: "1" },
  { ID: 34, CLASS: "Alkyl halides", Struct: "R—Br", LO: 500, HI: 680, Second: null, Intensity: "s", Assign: "C—Br stretch", Follow: "34,169", Help: "10", Show: "1" },
  { ID: 35, CLASS: "Alcohols", Struct: "RCH<sub>2</sub>OH", LO: 3400, HI: 3600, Second: null, Intensity: "varies", Assign: "O—H stretch", Follow: "35,36", Help: "11", Show: "1" },
  { ID: 36, CLASS: "Alcohols", Struct: "RCH<sub>2</sub>OH", LO: 1045, HI: 1055, Second: null, Intensity: "s", Assign: "C—O stretch", Follow: "35,36", Help: "11", Show: "1" },
  { ID: 37, CLASS: "Alcohols", Struct: "R<sub>2</sub>CHOH", LO: 3400, HI: 3600, Second: null, Intensity: "varies", Assign: "O—H stretch", Follow: "37,38", Help: "11", Show: "1" },
  { ID: 38, CLASS: "Alcohols", Struct: "R<sub>2</sub>CHOH", LO: 1095, HI: 1105, Second: null, Intensity: "s", Assign: "C—O stretch", Follow: "37,38", Help: "11", Show: "1" },
  { ID: 39, CLASS: "Alcohols", Struct: "R3COH", LO: 3400, HI: 3600, Second: null, Intensity: "varies", Assign: "O—H stretch", Follow: "39", Help: "11", Show: "1" },
  { ID: 40, CLASS: "Ethers", Struct: "R—O—R", LO: 1070, HI: 1150, Second: null, Intensity: "s", Assign: "C—O stretch", Follow: "40", Help: "12", Show: "1" },
  { ID: 41, CLASS: "Aldehydes", Struct: "RCHO", LO: 1720, HI: 1730, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "44,45", Help: "13", Show: "1" },
  { ID: 42, CLASS: "Aldehydes", Struct: "C=CCHO", LO: 1680, HI: 1690, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "44,45,12,13,14,21,22,23", Help: "13", Show: "1" },
  { ID: 43, CLASS: "Aldehydes", Struct: "ArCHO", LO: 1695, HI: 1705, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "44,45,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107", Help: "13", Show: "1" },
  { ID: 44, CLASS: "Aldehydes", Struct: "All aldehydes", LO: 2715, HI: 2725, Second: 2820, Intensity: "m", Assign: "CHO out of plane", Follow: "44,45,41,42,43", Help: "13", Show: "1" },
  { ID: 45, CLASS: "Aldehydes", Struct: "All aldehydes", LO: 2815, HI: 2825, Second: 2720, Intensity: "m", Assign: "CHO out of plane", Follow: "44,45,41,42,43", Help: "13", Show: "1" },
  { ID: 46, CLASS: "Ketones", Struct: "R<sub>2</sub>CO", LO: 1710, HI: 1720, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "46", Help: "14", Show: "1" },
  { ID: 47, CLASS: "Ketones", Struct: "R<sub>2</sub>CO 4-ring", LO: 1775, HI: 1785, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "47", Help: "14", Show: "1" },
  { ID: 48, CLASS: "Ketones", Struct: "R<sub>2</sub>CO 5-ring", LO: 1740, HI: 1750, Second: null, Intensity: "s", Assign: "C=O stretch doublet", Follow: "48", Help: "14", Show: "1" },
  { ID: 49, CLASS: "Ketones", Struct: "R<sub>2</sub>CO 6-ring", LO: 1710, HI: 1720, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "49", Help: "14", Show: "1" },
  { ID: 50, CLASS: "Ketones", Struct: "C=C—CO—R", LO: 1670, HI: 1680, Second: null, Intensity: "m", Assign: "C=O stretch", Follow: "12,13,14,21,22,23", Help: "14", Show: "1" },
  { ID: 51, CLASS: "Ketones", Struct: "Ar—CO—R", LO: 1685, HI: 1695, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107", Help: "14", Show: "1" },
  { ID: 52, CLASS: "Carboxylic acids", Struct: "RCO—OH", LO: 3395, HI: 3405, Second: null, Intensity: "s", Assign: "monomer OH", Follow: "52,53", Help: "15", Show: "1" },
  { ID: 53, CLASS: "Carboxylic acids", Struct: "RCO—OH", LO: 1755, HI: 1765, Second: null, Intensity: "s", Assign: "monomer C=O", Follow: "52,53", Help: "15", Show: "1" },
  { ID: 54, CLASS: "Carboxylic acids", Struct: "RCO—OH", LO: 2800, HI: 3400, Second: null, Intensity: "s (broad)", Assign: "dimer OH", Follow: "54,55", Help: "15", Show: "1" },
  { ID: 55, CLASS: "Carboxylic acids", Struct: "RCO—OH", LO: 1705, HI: 1715, Second: null, Intensity: "s", Assign: "dimer C=O", Follow: "54,55", Help: "15", Show: "1" },
  { ID: 56, CLASS: "Carboxylic acids", Struct: "C=C—CO—OH", LO: 3395, HI: 3405, Second: null, Intensity: "s", Assign: "monomer OH", Follow: "56,57,12,13,14,21,22,23", Help: "15", Show: "1" },
  { ID: 57, CLASS: "Carboxylic acids", Struct: "C=C—CO—OH", LO: 1715, HI: 1725, Second: null, Intensity: "s", Assign: "monomer C=O", Follow: "56,57,12,13,14,21,22,23", Help: "15", Show: "1" },
  { ID: 58, CLASS: "Carboxylic acids", Struct: "C=C—CO—OH", LO: 2800, HI: 3400, Second: null, Intensity: "s (broad)", Assign: "dimer OH", Follow: "58,59,12,13,14,21,22,23", Help: "15", Show: "1" },
  { ID: 59, CLASS: "Carboxylic acids", Struct: "C=C—CO—OH", LO: 1685, HI: 1695, Second: null, Intensity: "s", Assign: "dimer C=O", Follow: "58,59,12,13,14,21,22,23", Help: "15", Show: "1" },
  { ID: 60, CLASS: "Carboxylic acids", Struct: "RCO—O—", LO: 1550, HI: 1610, Second: null, Intensity: "m", Assign: "C—O stretch", Follow: "60,61", Help: "15", Show: "1" },
  { ID: 61, CLASS: "Carboxylic acids", Struct: "RCO—O—", LO: 1395, HI: 1405, Second: null, Intensity: "m", Assign: "C—O stretch", Follow: "60,61", Help: "15", Show: "1" },
  { ID: 62, CLASS: "Esters", Struct: "RCOOR`", LO: 1730, HI: 1740, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "62,168", Help: "16", Show: "1" },
  { ID: 63, CLASS: "Esters", Struct: "RCOOR` 5-ring", LO: 1765, HI: 1775, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "63,168", Help: "16", Show: "1" },
  { ID: 64, CLASS: "Esters", Struct: "RCOOR` 6-ring", LO: 1730, HI: 1740, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "64,168", Help: "16", Show: "1" },
  { ID: 65, CLASS: "Esters", Struct: "C=C—CO—OR", LO: 1715, HI: 1725, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "65,12,13,14,21,22,23,168", Help: "16", Show: "1" },
  { ID: 66, CLASS: "Esters", Struct: "ArCOOR", LO: 1715, HI: 1725, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "66,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107", Help: "16", Show: "1" },
  { ID: 67, CLASS: "Amides", Struct: "RCONH<sub>2</sub>", LO: 3495, HI: 3505, Second: null, Intensity: "m", Assign: "NH stretch (free)", Follow: "67,68,71", Help: "17", Show: "1" },
  { ID: 68, CLASS: "Amides", Struct: "RCONH<sub>2</sub>", LO: 1685, HI: 1695, Second: null, Intensity: "s", Assign: "C=O stretch (free)", Follow: "67,68,71", Help: "17", Show: "1" },
  { ID: 69, CLASS: "Amides", Struct: "RCONH<sub>2</sub>", LO: 3395, HI: 3405, Second: null, Intensity: "m", Assign: "NH stretch (H-bond)", Follow: "69,70,71", Help: "17", Show: "1" },
  { ID: 70, CLASS: "Amides", Struct: "RCONH<sub>2</sub>", LO: 1645, HI: 1655, Second: null, Intensity: "s", Assign: "C=O stretch (H-bond)", Follow: "69,70,71", Help: "17", Show: "1" },
  { ID: 71, CLASS: "Amides", Struct: "RCONH<sub>2</sub>", LO: 1600, HI: 1640, Second: null, Intensity: "s", Assign: "NH out of plane", Follow: "67,68,69,70,71", Help: "17", Show: "1" },
  { ID: 72, CLASS: "Amides", Struct: "RCONHR`", LO: 3435, HI: 3445, Second: null, Intensity: "m", Assign: "NH stretch (free)", Follow: "72,73,76", Help: "17", Show: "1" },
  { ID: 73, CLASS: "Amides", Struct: "RCONHR`", LO: 1675, HI: 1685, Second: null, Intensity: "s", Assign: "C=O stretch (free)", Follow: "72,73,76", Help: "17", Show: "1" },
  { ID: 74, CLASS: "Amides", Struct: "RCONHR`", LO: 3325, HI: 3335, Second: null, Intensity: "m", Assign: "NH stretch (H-bond)", Follow: "74,75,76", Help: "17", Show: "1" },
  { ID: 75, CLASS: "Amides", Struct: "RCONHR`", LO: 1645, HI: 1655, Second: null, Intensity: "s", Assign: "C=O stretch (H-bond)", Follow: "74,75,76", Help: "17", Show: "1" },
  { ID: 76, CLASS: "Amides", Struct: "RCONHR`", LO: 1530, HI: 1550, Second: null, Intensity: "m", Assign: "NH out of plane", Follow: "72,73,74,75,76", Help: "17", Show: "1" },
  { ID: 77, CLASS: "Amides", Struct: "RCONHR` 4-ring", LO: 1740, HI: 1750, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "77", Help: "17", Show: "1" },
  { ID: 78, CLASS: "Amides", Struct: "RCONHR` 5-ring", LO: 1695, HI: 1705, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "78", Help: "17", Show: "1" },
  { ID: 79, CLASS: "Amides", Struct: "RCONHR` 6-ring", LO: 1635, HI: 1645, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "79", Help: "17", Show: "1" },
  { ID: 80, CLASS: "Amides", Struct: "R`CONR<sub>2</sub>", LO: 1645, HI: 1655, Second: null, Intensity: "m", Assign: "C=O stretch", Follow: "80", Help: "17", Show: "1" },
  { ID: 81, CLASS: "Anhydrides", Struct: "R—CO—O—CO—R`", LO: 1755, HI: 1765, Second: 1820, Intensity: "s", Assign: "C=O stretch symm", Follow: "81,82", Help: "18", Show: "1" },
  { ID: 82, CLASS: "Anhydrides", Struct: "R—CO—O—CO—R`", LO: 1815, HI: 1825, Second: 1760, Intensity: "s", Assign: "C=O stretch asymm", Follow: "81,82", Help: "18", Show: "1" },
  { ID: 83, CLASS: "Acid Chloride", Struct: "R—CO—Cl", LO: 1795, HI: 1805, Second: null, Intensity: "s", Assign: "C=O stretch", Follow: "83", Help: "19", Show: "1" },
  { ID: 84, CLASS: "Amines", Struct: "RNH<sub>2</sub>", LO: 3395, HI: 3405, Second: 3500, Intensity: "w", Assign: "NH stretch", Follow: "84,85,86,87,171", Help: "20", Show: "1" },
  { ID: 85, CLASS: "Amines", Struct: "RNH<sub>2</sub>", LO: 3495, HI: 3505, Second: 3400, Intensity: "w", Assign: "NH stretch", Follow: "84,85,86,87,171", Help: "20", Show: "1" },
  { ID: 86, CLASS: "Amines", Struct: "RNH<sub>2</sub>", LO: 1560, HI: 1640, Second: null, Intensity: "s", Assign: "NH<sub>2</sub> in plane bend", Follow: "84,85,86,87,171", Help: "20", Show: "1" },
  { ID: 87, CLASS: "Amines", Struct: "RNH<sub>2</sub>", LO: 1030, HI: 1230, Second: null, Intensity: "m", Assign: "C—N stretch", Follow: "84,85,86,87,171", Help: "20", Show: "1" },
  { ID: 88, CLASS: "Amines", Struct: "R<sub>2</sub>NH", LO: 3310, HI: 3350, Second: null, Intensity: "w", Assign: "NH stretch", Follow: "88,89,171", Help: "20", Show: "1" },
  { ID: 89, CLASS: "Amines", Struct: "R<sub>2</sub>NH", LO: 1030, HI: 1230, Second: null, Intensity: "m", Assign: "C—N stretch", Follow: "88,89,171", Help: "20", Show: "1" },
  { ID: 90, CLASS: "Amines", Struct: "Ar<sub>2</sub>NH", LO: 3445, HI: 3455, Second: null, Intensity: "w", Assign: "NH stretch", Follow: "90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107", Help: "20", Show: "1" },
  { ID: 91, CLASS: "Amines", Struct: "Ar<sub>2</sub>NH", LO: 1250, HI: 1360, Second: null, Intensity: "s", Assign: "Ar—N stretch", Follow: "90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107", Help: "20", Show: "1" },
  { ID: 92, CLASS: "Aromatics", Struct: "monosubst.", LO: 730, HI: 770, Second: null, Intensity: "m", Assign: "C—H out of plane", Follow: "92,93,160,162,163", Help: "21", Show: "1" },
  { ID: 93, CLASS: "Aromatics", Struct: "monosubst.", LO: 690, HI: 710, Second: null, Intensity: "m", Assign: "C—H out of plane", Follow: "92,93,160,162,163", Help: "21", Show: "1" },
  { ID: 94, CLASS: "Aromatics", Struct: "ortho-disub.", LO: 735, HI: 770, Second: null, Intensity: "m", Assign: "C—H out of plane", Follow: "94,160,162,163", Help: "21", Show: "1" },
  { ID: 95, CLASS: "Aromatics", Struct: "meta-disub.", LO: 750, HI: 810, Second: null, Intensity: "m", Assign: "C—H out of plane", Follow: "95,96,160,162,163", Help: "21", Show: "1" },
  { ID: 96, CLASS: "Aromatics", Struct: "meta-disub.", LO: 690, HI: 710, Second: null, Intensity: "m", Assign: "C—H out of plane", Follow: "95,96,160,162,163", Help: "21", Show: "1" },
  { ID: 97, CLASS: "Aromatics", Struct: "para-disub.", LO: 810, HI: 840, Second: null, Intensity: "m", Assign: "C—H out of plane", Follow: "97,160,162,163", Help: "21", Show: "1" },
  { ID: 98, CLASS: "Aromatics", Struct: "1,2,3-trisub.", LO: 760, HI: 780, Second: null, Intensity: "m", Assign: "C—H out of plane", Follow: "98,99,160,162,163", Help: "21", Show: "1" },
  { ID: 99, CLASS: "Aromatics", Struct: "1,2,3-trisub.", LO: 705, HI: 745, Second: null, Intensity: "m", Assign: "C—H out of plane", Follow: "98,99,160,162,163", Help: "21", Show: "1" },
  { ID: 100, CLASS: "Aromatics", Struct: "1,3,5-trisub.", LO: 810, HI: 865, Second: null, Intensity: "m", Assign: "C—H out of plane", Follow: "100,101,160,162,163", Help: "21", Show: "1" },
  { ID: 101, CLASS: "Aromatics", Struct: "1,3,5-trisub.", LO: 675, HI: 730, Second: null, Intensity: "m", Assign: "C—H out of plane", Follow: "100,101,160,162,163", Help: "21", Show: "1" },
  { ID: 102, CLASS: "Aromatics", Struct: "1,2,4-trisub.", LO: 805, HI: 825, Second: null, Intensity: "m", Assign: "C—H out of plane", Follow: "102,103,160,162,163", Help: "21", Show: "1" },
  { ID: 103, CLASS: "Aromatics", Struct: "1,2,4-trisub.", LO: 870, HI: 885, Second: null, Intensity: "m", Assign: "C—H out of plane", Follow: "102,103,160,162,163", Help: "21", Show: "1" },
  { ID: 104, CLASS: "Aromatics", Struct: "1,2,3,4-tetrasub.", LO: 800, HI: 810, Second: null, Intensity: "m", Assign: "C—H out of plane", Follow: "104,160,162,163", Help: "21", Show: "1" },
  { ID: 105, CLASS: "Aromatics", Struct: "1,2,4,5-tetrasub.", LO: 855, HI: 870, Second: null, Intensity: "m", Assign: "C—H out of plane", Follow: "105,160,162,163", Help: "21", Show: "1" },
  { ID: 106, CLASS: "Aromatics", Struct: "1,2,3,5-tetrasub.", LO: 840, HI: 850, Second: null, Intensity: "m", Assign: "C—H out of plane", Follow: "106,160,162,163", Help: "21", Show: "1" },
  { ID: 107, CLASS: "Aromatics", Struct: "1,2,3,4,5-pentasub.", LO: 865, HI: 875, Second: null, Intensity: "w", Assign: "C—H out of plane", Follow: "107,160,162,163", Help: "21", Show: "1" },
  { ID: 108, CLASS: "Alkanes", Struct: "—CH<sub>3</sub>", LO: 1255, HI: 1265, Second: null, Intensity: "s", Assign: "—CH<sub>3</sub>", Follow: "108,109,110,111", Help: "7", Show: "1" },
  { ID: 109, CLASS: "Alkanes", Struct: "—CH<sub>3</sub>", LO: 1375, HI: 1385, Second: null, Intensity: "w", Assign: "—CH<sub>3</sub>", Follow: "108,109,110,111", Help: "7", Show: "1" },
  { ID: 110, CLASS: "Alkanes", Struct: "—CH<sub>3</sub>", LO: 2865, HI: 2875, Second: null, Intensity: "m,s", Assign: "—CH<sub>3</sub>", Follow: "108,109,110,111", Help: "7", Show: "1" },
  { ID: 111, CLASS: "Alkanes", Struct: "—CH<sub>3</sub>", LO: 2955, HI: 2965, Second: null, Intensity: "m,s", Assign: "—CH<sub>3</sub>", Follow: "108,109,110,111", Help: "7", Show: "1" },
  { ID: 112, CLASS: "Alkanes", Struct: "—CH<sub>2</sub>—", LO: 1465, HI: 1475, Second: null, Intensity: "s", Assign: "—CH<sub>2</sub>—", Follow: "112,113,114", Help: "7", Show: "1" },
  { ID: 113, CLASS: "Alkanes", Struct: "—CH<sub>2</sub>—", LO: 2845, HI: 2855, Second: null, Intensity: "m,s", Assign: "—CH<sub>2</sub>", Follow: "112,113,114", Help: "7", Show: "1" },
  { ID: 114, CLASS: "Alkanes", Struct: "—CH<sub>2</sub>—", LO: 2920, HI: 2930, Second: null, Intensity: "m,s", Assign: "—CH<sub>2</sub>—", Follow: "112,113,114", Help: "7", Show: "1" },
  { ID: 115, CLASS: "Alkenes", Struct: "conj. dienes", LO: 1595, HI: 1605, Second: 1650, Intensity: "s", Assign: "dienes", Follow: "115,116", Help: "8", Show: "1" },
  { ID: 116, CLASS: "Alkenes", Struct: "conj. dienes", LO: 1645, HI: 1655, Second: 1600, Intensity: "s", Assign: "dienes", Follow: "115,116", Help: "8", Show: "1" },
  { ID: 117, CLASS: "Alkenes", Struct: "Ar—CH=CHR", LO: 1620, HI: 1630, Second: null, Intensity: "s", Assign: "Ar—CH=CHR", Follow: "92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107", Help: "8", Show: "1" },
  { ID: 118, CLASS: "Phenols", Struct: "Ar—OH", LO: 1195, HI: 1205, Second: null, Intensity: null, Assign: "C—O stretch", Follow: "92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107", Help: "6", Show: "1" },
  { ID: 119, CLASS: "Ethers", Struct: "Ar—O—R", LO: 1220, HI: 1260, Second: null, Intensity: "s", Assign: "C—O stretch", Follow: "92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107", Help: "12", Show: "1" },
  { ID: 120, CLASS: "Misc.", Struct: "C=N", LO: 1615, HI: 1700, Second: null, Intensity: null, Assign: "C=N", Follow: "120", Help: "6", Show: "1" },
  { ID: 121, CLASS: "Misc.", Struct: "C#N (nitriles)", LO: 2245, HI: 2255, Second: null, Intensity: "m", Assign: "C#N unconjugated", Follow: "121", Help: "22", Show: "1" },
  { ID: 122, CLASS: "Misc.", Struct: "C#N (nitriles)", LO: 2225, HI: 2235, Second: null, Intensity: "m", Assign: "C#N conjugated", Follow: "122", Help: "22", Show: "1" },
  { ID: 123, CLASS: "Misc.", Struct: "R—N—C ", LO: 2110, HI: 2165, Second: null, Intensity: null, Assign: "isocyanides", Follow: "123", Help: "6", Show: "1" },
  { ID: 124, CLASS: "Misc.", Struct: "R—N=C=S", LO: 1990, HI: 2140, Second: null, Intensity: null, Assign: "N=C in R—N=C=S", Follow: "124", Help: "6", Show: "1" },
  { ID: 125, CLASS: "Misc.", Struct: "N—O nitro comp.", LO: 1535, HI: 1545, Second: 1380, Intensity: "s", Assign: "Alif. Nitro", Follow: "125,126", Help: "22", Show: "1" },
  { ID: 126, CLASS: "Misc.", Struct: "N—O nitro comp.", LO: 1375, HI: 1385, Second: 1540, Intensity: "m", Assign: "Alif. Nitro", Follow: "125,126", Help: "22", Show: "1" },
  { ID: 127, CLASS: "Misc.", Struct: "N—O nitro comp.", LO: 1515, HI: 1525, Second: 1350, Intensity: "m,s", Assign: "Arom. Nitro", Follow: "127,128", Help: "22", Show: "1" },
  { ID: 128, CLASS: "Misc.", Struct: "N—O nitro comp.", LO: 1345, HI: 1355, Second: 1520, Intensity: "m,s", Assign: "Arom. Nitro", Follow: "127,128", Help: "22", Show: "1" },
  { ID: 129, CLASS: "Misc.", Struct: "S—H thiols", LO: 2550, HI: 2600, Second: null, Intensity: "w", Assign: "S—H (sharp)", Follow: "129", Help: "6", Show: "1" },
  { ID: 130, CLASS: "Misc.", Struct: "S—OR esters", LO: 700, HI: 900, Second: null, Intensity: "s", Assign: "S—OR esters", Follow: "130", Help: "6", Show: "1" },
  { ID: 131, CLASS: "Misc.", Struct: "S—S disulfide", LO: 500, HI: 540, Second: null, Intensity: "w", Assign: "S—S disulfide asym.", Follow: "131", Help: "6", Show: "1" },
  { ID: 132, CLASS: "Misc.", Struct: "C=S thiocarbonyl", LO: 1050, HI: 1200, Second: null, Intensity: "s", Assign: "C=S thiocarbonyl", Follow: "132", Help: "6", Show: "1" },
  { ID: 133, CLASS: "Misc.", Struct: "S=O sulfoxide", LO: 1030, HI: 1060, Second: null, Intensity: "s", Assign: "S=O sulfoxide", Follow: "133", Help: "6", Show: "1" },
  { ID: 134, CLASS: "Misc.", Struct: "S=O sulfone", LO: 1300, HI: 1350, Second: 1140, Intensity: "s", Assign: "S=O sulfone 1", Follow: "134,135", Help: "6", Show: "1" },
  { ID: 135, CLASS: "Misc.", Struct: "S=O sulfone", LO: 1120, HI: 1160, Second: 1325, Intensity: "s", Assign: "S=O sulfone 2", Follow: "135,134", Help: "6", Show: "1" },
  { ID: 136, CLASS: "Misc.", Struct: "S=O sulfonic acid", LO: 1340, HI: 1350, Second: null, Intensity: "s", Assign: "S=O sulfonic acid", Follow: "136", Help: "6", Show: "1" },
  { ID: 137, CLASS: "Misc.", Struct: "S=O sulfonyl chloride", LO: 1360, HI: 1370, Second: 1180, Intensity: "s", Assign: "S=O sulfonyl chloride 1", Follow: "137,138", Help: "6", Show: "1" },
  { ID: 138, CLASS: "Misc.", Struct: "S=O sulfonyl chloride", LO: 1170, HI: 1190, Second: 1365, Intensity: "s", Assign: "S=O sulfonyl chloride 2", Follow: "138,137", Help: "6", Show: "1" },
  { ID: 139, CLASS: "Misc.", Struct: "S=O sulfate", LO: 1350, HI: 1450, Second: null, Intensity: "s", Assign: "S=O sulfate ester", Follow: "139", Help: "6", Show: "1" },
  { ID: 140, CLASS: "Misc.", Struct: "P—H phosphine", LO: 2280, HI: 2440, Second: null, Intensity: "m", Assign: "P—H phosphine sharp", Follow: "140,141", Help: "6", Show: "1" },
  { ID: 141, CLASS: "Misc.", Struct: "P—H phosphine", LO: 950, HI: 1250, Second: null, Intensity: "w", Assign: "P—H bending", Follow: "141,140", Help: "6", Show: "1" },
  { ID: 142, CLASS: "Misc.", Struct: "(O=)PO—H ", LO: 2550, HI: 2700, Second: null, Intensity: "s", Assign: "(O=)PO—H phosphonic acid", Follow: "142", Help: "6", Show: "1" },
  { ID: 143, CLASS: "Misc.", Struct: "P—OR esters", LO: 900, HI: 1050, Second: null, Intensity: "s", Assign: "P—OR esters", Follow: "143", Help: "6", Show: "1" },
  { ID: 144, CLASS: "Misc.", Struct: "P=O phosphine oxide", LO: 1100, HI: 1200, Second: null, Intensity: "s", Assign: "P=O phosphine oxide", Follow: "144", Help: "6", Show: "1" },
  { ID: 145, CLASS: "Misc.", Struct: "P=O phosphonate", LO: 1230, HI: 1260, Second: null, Intensity: "s", Assign: "P=O phosphonate", Follow: "145", Help: "6", Show: "1" },
  { ID: 146, CLASS: "Misc.", Struct: "P=O phosphate", LO: 1100, HI: 1200, Second: null, Intensity: "s", Assign: "P=O phosphate", Follow: "146", Help: "6", Show: "1" },
  { ID: 147, CLASS: "Misc.", Struct: "P=O phosphoramide", LO: 1200, HI: 1275, Second: null, Intensity: "s", Assign: "P=O phosphoramide", Follow: "147", Help: "6", Show: "1" },
  { ID: 148, CLASS: "Misc.", Struct: "Si—H silane", LO: 2100, HI: 2360, Second: null, Intensity: "s", Assign: "Si—H silane", Follow: "148", Help: "6", Show: "1" },
  { ID: 149, CLASS: "Misc.", Struct: "Si—OR", LO: 1000, HI: 1110, Second: null, Intensity: "s", Assign: "Si—OR (broad)", Follow: "149", Help: "6", Show: "1" },
  { ID: 150, CLASS: "Misc.", Struct: "Si—CH<sub>3</sub>", LO: 1240, HI: 1260, Second: null, Intensity: "s", Assign: "Si—CH<sub>3</sub> (sharp)", Follow: "150", Help: "6", Show: "1" },
  { ID: 151, CLASS: "Misc.", Struct: "=NOH oxime", LO: 3550, HI: 3600, Second: null, Intensity: "s", Assign: "=NOH (OH stretch)", Follow: "151,152,153", Help: "6", Show: "1" },
  { ID: 152, CLASS: "Misc.", Struct: "=NOH oxime", LO: 1650, HI: 1680, Second: null, Intensity: null, Assign: "=NOH (C=N)", Follow: "151,152,153", Help: "6", Show: "1" },
  { ID: 153, CLASS: "Misc.", Struct: "=NOH oxime", LO: 930, HI: 960, Second: null, Intensity: null, Assign: "=NOH (N—O)", Follow: "151,152,153", Help: "6", Show: "1" },
  { ID: 154, CLASS: "Misc.", Struct: "N—O amine oxide", LO: 940, HI: 980, Second: null, Intensity: null, Assign: "N—O alifatic", Follow: "154", Help: "6", Show: "1" },
  { ID: 155, CLASS: "Misc.", Struct: "N—O amine oxide", LO: 1200, HI: 1300, Second: null, Intensity: null, Assign: "N—O aromatic", Follow: "155,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107", Help: "6", Show: "1" },
  { ID: 156, CLASS: "Misc.", Struct: "N=O nitroso", LO: 1500, HI: 1600, Second: null, Intensity: "s", Assign: "N=O nitroso", Follow: "156", Help: "6", Show: "1" },
  { ID: 157, CLASS: "Alcohols", Struct: "O—H free", LO: 3610, HI: 3640, Second: null, Intensity: "s", Assign: "O—H free hydroxyl", Follow: "35,36,37,38", Help: "11", Show: "1" },
  { ID: 158, CLASS: "Phenols", Struct: "ArO—H free", LO: 3610, HI: 3640, Second: null, Intensity: "s sharp", Assign: "ArO—H", Follow: "1", Help: "11", Show: "1" },
  { ID: 159, CLASS: "Phenols", Struct: "ArO—H bonded", LO: 3200, HI: 3500, Second: null, Intensity: "s broad", Assign: "ArO—H H-bonded", Follow: "1", Help: "11", Show: "1" },
  { ID: 160, CLASS: "Aromatics", Struct: "Ar—H", LO: 3000, HI: 3100, Second: null, Intensity: "s", Assign: "Ar—H stretch", Follow: "92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,162", Help: "21", Show: "1" },
  { ID: 161, CLASS: "Aldehydes", Struct: "RHCO", LO: 2695, HI: 2830, Second: null, Intensity: "m", Assign: "RCHO C—H stretch", Follow: "41,42,43,44,45", Help: "13", Show: "1" },
  { ID: 162, CLASS: "Aromatics", Struct: "C—C in ring", LO: 1585, HI: 1600, Second: null, Intensity: "m", Assign: "Ar C—C stretch", Follow: "160,162,163", Help: "21", Show: "1" },
  { ID: 163, CLASS: "Aromatics", Struct: "C—C in ring", LO: 1400, HI: 1500, Second: null, Intensity: "m", Assign: "Ar C—C stretch", Follow: "160,162,163", Help: "21", Show: "1" },
  { ID: 164, CLASS: "Alkanes", Struct: "C—H rock", LO: 1350, HI: 1370, Second: 723, Intensity: "m", Assign: "C—H rock", Follow: "1,2,3,4,172", Help: "7", Show: "1" },
  { ID: 165, CLASS: "Misc.", Struct: "N—O nitro comp.", LO: 1475, HI: 1550, Second: null, Intensity: "s", Assign: "N—O asym. stretch", Follow: "165,166,125,126,127,128", Help: "6", Show: "1" },
  { ID: 166, CLASS: "Misc.", Struct: "N—O nitro comp.", LO: 1290, HI: 1360, Second: null, Intensity: "m", Assign: "N—O symm. stretch", Follow: "165,166,125,126,127,128", Help: "6", Show: "1" },
  { ID: 167, CLASS: "Carboxylic acids", Struct: "RCO—OH", LO: 1000, HI: 1320, Second: null, Intensity: "s", Assign: "C—O stretch", Follow: "52,53,54,55", Help: "15", Show: "1" },
  { ID: 168, CLASS: "Esters", Struct: "RCOOR`", LO: 1000, HI: 1320, Second: null, Intensity: "s", Assign: "C—O stretch", Follow: null, Help: "16", Show: "1" },
  { ID: 169, CLASS: "Alkyl halides", Struct: "CH<sub>2</sub>X", LO: 1150, HI: 1300, Second: null, Intensity: "m", Assign: "C—H wag (—CH<sub>2</sub>X)", Follow: "32,33,34", Help: "10", Show: "1" },
  { ID: 170, CLASS: "Carboxylic acids", Struct: "RCO—OH", LO: 910, HI: 950, Second: null, Intensity: "m", Assign: "RCOOH O—H bend", Follow: null, Help: "15", Show: "1" },
  { ID: 171, CLASS: "Amines", Struct: "RNH<sub>2</sub>, R<sub>2</sub>NH", LO: 665, HI: 910, Second: null, Intensity: "s (broad)", Assign: "N—H wag amines", Follow: "84,85,86,87,88,89", Help: "20", Show: "1" },
  { ID: 172, CLASS: "Alkanes", Struct: "C—H rock", LO: 720, HI: 725, Second: 1360, Intensity: "m", Assign: "C—H rock", Follow: "1,2,3,4,164", Help: "7", Show: "1" }
]

// Функция для парсинга Follow в массив чисел
function parseFollow(followStr) {
  if (!followStr) return [];
  return followStr.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
}

function findRangesForNumber(num, rangesToSearch) {
  return rangesToSearch.filter(r => num >= r.LO && num <= r.HI);
}

function formatRangeOutput(r) {
  // Возвращаем строку с оберткой в div с классом для стилизации
  return `<div class="range-output">
    <br><b>${r.Assign};</b> ${r.Struct}; ${r.CLASS}; диапазон: ${r.LO}—${r.HI} <i>${r.Intensity}</i>
  </div>`;
}

function formatRangeOutput2(r) {
  // Возвращаем строку с оберткой в div с классом для стилизации
  return `<div class="range-output2">
    <b>${r.Assign};</b> ${r.Struct}; ${r.CLASS};  диапазон: ${r.LO}—${r.HI} <i>${r.Intensity}</i>
  </div>`;
}

function processInput() {
  const input = document.getElementById('inputNumbers').value.trim();
  if (!input) {
    return;
  }

  const numbers = input.split(/[\s,]+/).map(x => Number(x)).filter(x => !isNaN(x));
  if (numbers.length === 0) {
    return;
  }

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';

  // Для каждого числа ищем диапазоны
  const numberToRanges = {};
  numbers.forEach(num => {
    numberToRanges[num] = findRangesForNumber(num, data);
  });

 numbers.forEach(num => {
  const rangesFound = numberToRanges[num];
  if (rangesFound.length === 0) {
    outputDiv.innerHTML += `<b><br>Для волнового числа <span class="alert">${num}</span> не найдено ИК-полос</b><br><br>`;
    return;
  }


   outputDiv.innerHTML += `<br><span class="wavelenght">${num}:</span>`;
   rangesFound.forEach(r => {
     outputDiv.innerHTML += formatRangeOutput(r);

    
    // Обрабатываем Follow как массив чисел
    const followIDs = parseFollow(r.Follow);
    if (followIDs.length > 0) {
      outputDiv.innerHTML += `<span class="highlight2"><b> Соотносится с:</b></span>`;
      followIDs.forEach(fId => {
        const linkedRange = data.find(rr => rr.ID === fId);
        if (linkedRange) {
          // Форматируем linkedRange
          const rangeStr = formatRangeOutput2(linkedRange);

          // Фильтруем все числа, которые попадают в linkedRange
          const numbersInLinkedRange = numbers.filter(n => n >= linkedRange.LO && n <= linkedRange.HI);

          // Формируем строку с числами, если они есть
          const numbersStr = numbersInLinkedRange.length > 0 ? `<span class="highlight2">Также в диапазоне:</span> <b> ${numbersInLinkedRange.join(', ')}</b><br>` : '';

          // Выводим linkedRange с числами
          outputDiv.innerHTML += `<br>${rangeStr}${numbersStr}`;
        } else {
          outputDiv.innerHTML += `<br>Follow ID ${fId} не найден`;
        }
      });
    }
  });

  outputDiv.innerHTML += '<br>';

 });
} 

