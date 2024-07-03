class Shape {
    constructor(name, textColor, shapeColor) {
            this.shapeColor = shapeColor,
            this.textColor = textColor,
            this.name = name
    }
    render() {
        return ''
    }
}

class Triangle extends Shape {

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x='150' y='125' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.name}</text>`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x='150' y='125' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.name}</text>`;
    }
}

class Square extends Shape {

    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.shapeColor}" />
        <text x='150' y='125' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.name}</text>`;
    }
}

module.exports = { Triangle, Circle, Square };