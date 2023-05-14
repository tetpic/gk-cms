import { beforeEach } from "node:test";
import { concatClasses, sortHandler } from "./utils";

describe('sortHandler', () => {
    let array : any[] = [
      {title: 'Обычный канделябр', timeCreated: '15-02-2023'},
      {title: 'Дорогой каделябр', timeCreated: '16-02-2023'},
    ]

    beforeEach(()=>{
        array = [
          {title: 'Обычный канделябр', timeCreated: '15-02-2023'},
          {title: 'Дорогой каделябр', timeCreated: '16-02-2023'},
        ]
    })

    test('sort by title', () => {
      expect(sortHandler(array, 'title')).toEqual( [
        {title: 'Дорогой каделябр', timeCreated: '16-02-2023'},
        {title: 'Обычный канделябр', timeCreated: '15-02-2023'},
      ]);
    });

    test('sort by created time', ()=> {
      expect(sortHandler(array, 'timeCreated')).toEqual( [
        {title: 'Обычный канделябр', timeCreated: '15-02-2023'},
        {title: 'Дорогой каделябр', timeCreated: '16-02-2023'},
      ]);
    })

    test('sort empty array', ()=> {
      expect(sortHandler([], 'timeCreated')).toEqual([]);
    })

    test('sort equal objects in array', ()=> {
      expect(sortHandler([ 
        {title: 'Обычный канделябр', timeCreated: '15-02-2023'},  
        {title: 'Обычный канделябр', timeCreated: '15-02-2023'}], 'title'))
        .toEqual([ 
          {title: 'Обычный канделябр', timeCreated: '15-02-2023'},  
          {title: 'Обычный канделябр', timeCreated: '15-02-2023'}])
    })
});

describe('concatClasses', ()=> {
  let array = ['0', 'null', 'test', '', 'lol']
  
  beforeEach(()=>{
    array = ['0', 'null', 'test', '', 'lol']
  })

  test('concat array with "falsy" strings', ()=>{
    expect(concatClasses(array)).toEqual('0 null test lol')    
  })

  test('finished with no arguments', ()=> {
    expect(concatClasses([])).toEqual('')
  })

  test('finished with empty string', ()=>{
    expect(concatClasses(['', ''])).toEqual('')
  })
  
})




 