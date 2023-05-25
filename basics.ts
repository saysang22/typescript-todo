let age: number
age = 12

let userNage: string

let hobbies: string[]
hobbies = ['Sports', 'Cooking']

type Person = {
    name: string,
    age: number
}

let person: Person

person = {
    name: 'kim',
    age: 38
}

let people: Person[]

people = [{
    name: 'min',
    age: 38
}]

let test: string | number = 'typescript'

test = 1

// 이 부분은 함수가 반환하는 값이 어떤 타입인지 지정

function add(a: number, b: number): number {
    return a + b
}

function output(value: any) {
    console.log(value);

}

function genericsTest<T>(array: T[], value: T) {
    const copy = [value, ...array];
    return copy
}
const arrayTest = [1, 2, 3]
const updatedArray = genericsTest(arrayTest, 9)
