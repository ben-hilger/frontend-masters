use std::fmt::{Display, Formatter};
use std::str::FromStr;
use crate::shapes::area::Area;
use crate::shapes::collisions::{Contains, PointIter, Points};

pub struct Rectangle {
    pub x: f64,
    pub y: f64,
    pub width: f64,
    pub height: f64,
}

impl Rectangle {
    pub fn contains_point(&self, (x, y): (f64, f64)) -> bool {
        return self.x <= x && self.x + self.width >= x &&
            self.y <= y && self.y + self.height >= y;
    }
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
impl Contains for Rectangle {
    fn contains_point(&self, (x, y): (f64, f64)) -> bool {
        return self.x <= x && self.x + self.width >= x &&
            self.y <= y && self.y + self.height >= y;
    }
}

impl Points for Rectangle {
    fn points(&self) -> PointIter {
        return vec![
            (self.x, self.y),
            (self.x + self.width, self.y),
            (self.x, self.y + self.height),
            (self.x + self.width, self.y + self.height)
        ].into();
    }
}


impl FromStr for Rectangle {
    type Err = anyhow::Error;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        let parts = s.split(" ").collect::<Vec<_>>();
        if parts.len() != 4 {
            return Err(anyhow::anyhow!("Bad rectangle from string"));
        }
        return Ok(Rectangle {
            x: parts[0].parse()?,
            y: parts[1].parse()?,
            width: parts[2].parse()?,
            height: parts[3].parse()?
        });
    }
}