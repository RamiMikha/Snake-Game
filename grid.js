const GRIDE_SIZE = 21

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRIDE_SIZE) + 1,
        y: Math.floor(Math.random() * GRIDE_SIZE) + 1
    }
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRIDE_SIZE ||
        position.y < 1 || position.y > GRIDE_SIZE
    )
}