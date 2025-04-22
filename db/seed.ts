import { prisma } from './prisma';
import sampleData from './sample-data';

async function main() {

    await prisma.product.deleteMany();
    await prisma.product.createMany({ data: sampleData.products });

    console.log('Database seeded with sample data.');
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });