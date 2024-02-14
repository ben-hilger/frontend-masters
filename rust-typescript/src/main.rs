use std::collections::{HashMap, HashSet};

struct Custom {
    age: usize,
    name: String
}

enum Item {
    Number(usize),
    String(String),
    MyCustom(Custom)
}

enum Color {
    Red,
    Blue,
    Green,
    Yellow
}

impl Color {
    fn is_green(&self) -> bool {
        if let Color::Green = self {
            return true;
        }
        return false;
    }

    fn is_green_parts(&self) -> bool {
        return match self {
            Color::Red => false,
            Color::Green => false,
            Color::Blue => true,
            Color::Yellow => true
        }
    }
}

struct MyStruct {
    age: Vec<usize>
}

#[derive(Debug)]
struct CountItem {
    count: usize
}

fn main() {
    println!("--Collect/Iter Basics---");
    let list: Vec<_> = vec![1, 2, 3]
        .iter()
        .map(|x| x + 1)
        .collect();
    println!("items: {:?}", list);
    
    // Manually do a collect
    let data = vec![1, 2, 3];
    let mut list_2 = data
        .iter()
        .map(|x| x + 1);

    let mut new_vector = vec![];

    while let Some(x) = list_2.next() {
        new_vector.push(x);
    }

    println!("collected items: {:?}", new_vector);

    let strings: String = vec!["this", "is", "a", "test"]
        .into_iter()
        .collect();

    println!("string: {}", strings);

    let hash_set: HashSet<isize> = vec![1, 2, 3]
        .into_iter()
        .collect();
    println!("hash set: {:?}", hash_set);


    let hash_map: HashMap<&str, usize> = vec!["this", "is", "a", "test"]
        .into_iter()
        .enumerate()
        .map(|(idx, item)| (item, idx))
        .collect();
    println!("hash map: {:?}", hash_map);

    let value: i32 = vec![1, 2, 3]
        .iter()
        .sum();
    println!("sum value: {}", value);

    let what_about_this: usize = vec![1, 2, 3]
        .iter()
        .filter(|x| *x % 2 == 0)
        .count();
    println!("what about this: {}", what_about_this);

    println!("---Reading file/enumeration practice---");
    let file = std::fs::read_to_string("lines.txt").unwrap();

    file
        .lines()
        .for_each(|line| println!("{}", line));

    file
        .lines()
        .enumerate()
        .filter(|(idx, _)| idx % 2 == 0)
        .for_each(|(_, line)| println!("{}", line));

    file
        .lines()
        .enumerate()
        .filter(|(idx, _)| idx % 2 == 0)
        .skip(2)
        .take(2)
        .for_each(|(_, line)| println!("{}", line));

    println!("---Enum Practice---");
    print_color(Color::Green);
    print_color(Color::Red);
    print_color(Color::Blue);
    print_color(Color::Yellow);

    let green = Color::Green;
    println!("{}", green.is_green());

    println!("---Unwrap practice---");
    println!("{} {}", practice(vec![1, 2, 3], 1), practice(vec![1, 2, 3], 10));

    println!("---Error handling practice---");
    read_file_error_handling();
    read_file_error_handling_to_int();

    let mut foo = MyStruct { age: vec![5, 6, 7] };
    foo.age = vec![2, 4, 5];

    println!("---Borrow checker practice---");
    let mut item = CountItem { count: 1 };
    println!("{:?}", item);
    add_one(&mut item);
    println!("{:?}", item);

    let mut items = vec![CountItem { count: 1}];
    let first = items.first_mut();
    println!("{:?}", first);

    print_all(&items);

    let first = items.get_mut(0);
    println!("{:?}", first);
    let second = items.get_mut(1);
    println!("{:?}", second);
}

fn print_all(items: &Vec<CountItem>) {
    for item in items {
        println!("{:?}", item);
    }
}

fn add_one(item: &mut CountItem) {
    item.count += 1;
}

fn practice(nums: Vec<usize>, index: usize) -> usize {
    return nums.get(index).unwrap_or(&index) * 5;
}

fn multiply_some(num: Option<usize>) -> Option<usize> {
    return Some(num? * 5);
}
fn multiply(num: Option<usize>) -> usize {
    return num.unwrap_or(0) * 5;
}

fn print_color(color: Color) {
    match color {
        Color::Red => println!("red"),
        Color::Green => println!("green"),
        Color::Blue => println!("blue"),
        Color::Yellow => println!("yellow")
    }
}

fn read_file_error_handling() {
    let file_name = std::env::args().nth(1)
        .expect("the file name to be passed in");
    let file = std::fs::read_to_string(file_name)
        .expect("Unable to read the file to string");

    file.lines().for_each(|line| println!("{}", line));
}

fn read_file_error_handling_to_int() {
    let file_name = std::env::args().nth(1)
        .expect("the file name to be passed in");
    let file = std::fs::read_to_string(file_name)
        .expect("Unable to read the file to string");

    file.lines().for_each(|line| {
        if let Ok(value) = line.parse::<usize>() {
            println!("{}", value);
        } else {
            println!("Line not a number");
        }
    });
}