use std::fmt::{Display, Formatter};
use crate::shapes::area::Area;

pub struct Rectangle {
    pub x: f64,
    pub y: f64,
    pub width: f64,
    pub height: f64,
}

impl Area for Rectangle {
    fn area(&self) -> f64 {
        return self.height * self.width;
    }
}

impl Display for Rectangle {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        return write!(f, "Rectangle({}, {}) {}x{}", self.x, self.y, self.width, self.height);
    }
}

impl Default for Rectangle {
    fn default() -> Self {
        return Rectangle {
            x: 0.0,
            y: 0.0,
            width: 10.0,
            height: 10.0,
        }
    }
}