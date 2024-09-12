import { test, expect } from '@playwright/test';

  test('test web table', async ({ page }) => {
      await page.goto('https://cosmocode.io/automation-practice-webtable/');

      const tabla = await page.locator("xpath=//table[@id='countries']");
      const filas = await tabla.locator("xpath=.//tr").all();
      console.log(filas.length);

      const paises: pais[] = [] 
       for(let fila of filas){
        let pais: pais = {
          name: await fila?.locator("xpath=.//td[2]").innerText(),
          capital:  await fila?.locator("xpath=.//td[3]").innerText(),
          currency: await fila?.locator("xpath=.//td[4]").innerText(),
          lenguage: await fila?.locator("xpath=.//td[5]").innerText()
        }
        paises.push(pais)
       }

      //  for(let info of paises){
      //   console.log('nombre: ', info.name)
      //   console.log('capital: ', info.capital)
      //   console.log('moneda: ', info.currency)
      //   console.log('lenguaje: ', info.lenguage)
      //   console.log('')
      //  }Spanish

       const spanishSpeakers = paises.filter(pais => pais.lenguage === 'Spanish');

       console.log('paises hispanohablante', spanishSpeakers);
      // const fila1 = filas.at(1)
      // const nombrePais = await fila1?.locator("xpath=.//td[2]").innerText();
      // const nombreCapital = await fila1?.locator("xpath=.//td[3]").innerText();
      // const moneda = await fila1?.locator("xpath=.//td[4]").innerText();

      // console.log(nombrePais, nombreCapital, moneda);

    });

    interface pais{
      name: string
      capital: string
      currency: string
      lenguage: string
    }

    /* 
   container: //table[@id='countries']
   filas: //tr[2]
   celdas: //td[1]
    
    */