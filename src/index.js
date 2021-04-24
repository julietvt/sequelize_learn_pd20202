/* Через транзакцию INSERT, UPDATE, DELETE */
import { CreditCard, sequelize } from './db/models';
async function card_transaction(fromCardId, toCardId, value) {
  try {
    const fromCard = await CreditCard.findByPk(fromCardId);
    const toCard = await CreditCard.findByPk(toCardId);

    console.log('Before transaction:');
    console.log(fromCard.get());
    console.log(toCard.get());

    const tr = await sequelize.transaction();
    fromCard.balance -= value;
    const updatedFromCard = await fromCard.save({ transaction: tr });
    toCard.balance += value;
    const updatedToCard = await toCard.save({ transaction: tr });
    await tr.commit();

    console.log('After transaction:');
    console.log(fromCard.get());
    console.log(toCard.get());
  } catch (e) {
    console.error(e);
  }
}

card_transaction(2, 1, 10000);
