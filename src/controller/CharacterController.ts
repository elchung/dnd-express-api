import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
// import {User} from "../../dnd-express-api/src/entity/User";
// export class UserController {
//
//   private userRepository = getRepository(User);
//
//   async all(request: Request, response: Response, next: NextFunction) {
//     return this.userRepository.find();
//   }
//
//   async one(request: Request, response: Response, next: NextFunction) {
//     return this.userRepository.findOne(request.params.id);
//   }
//
//   async save(request: Request, response: Response, next: NextFunction) {
//     return this.userRepository.save(request.body);
//   }
//
//   async remove(request: Request, response: Response, next: NextFunction) {
//     let userToRemove = await this.userRepository.findOne(request.params.id);
//     await this.userRepository.remove(userToRemove);
//   }
//
// }

// app.get('/characters/:characterId', async (request, response) => {});
//
// app.get('/characters/user/:username', async (request, response) => {});
//
// app.post('/characters/', async (request, response) => {});
//
// app.put('/characters/:characterId', (request, response) => {});
//
// app.put('/characters/:characterId/death_saves', async (request, response) => {});
//
// app.put('/characters/:characterId/known_spells', async (request, response) => {});
//
// app.put('/characters/:characterId/known_spells/:level', async (request, response) => {});
//
// app.put('/characters/:characterId/ability_scores', async (request, response) => {});
//
// app.post('/characters/:characterId/features_and_traits', async (request, response) => {
// });
//
// app.post('/characters/:characterId/features_and_traits/bulk', async (request, response) => {
// });
//
// app.put('/characters/:characterId/features_and_traits/', async (request, response) => {
// });
//
// app.put('/characters/:characterId/features_and_traits/bulk', async (request, response) => {
// });
//
// app.delete('/characters/:characterId/features_and_traits/:fatId', async (request, response) => {
// })
//
// app.put('/characters/:characterId/spell_slots/', async (request, response) => {  // TODO need to figure this out
//
// });
//
// app.put('/characters/:characterId/spell_slots/:level', async (request, response) => {
//
// });
//
// app.put('/characters/:characterId/treasure/money', async (request, response) => {
//
// });
//
// // app.put('/characters/:characterId/treasure/items/:id', async (request, response) => {
//
// // });
//
// // app.post('/characters/:characterId/treasure/items', async (request, response) => {
//
// // });
//
// // app.delete('/characters/:characterId/treasure/items/:id', async (request, response) => {
//
// // });
//
// // app.put('/characters/:characterId/treasure/items/:id', async (request, response) => {
//
// // });
//
// // app.put('/characters/:characterId/settings', async (request, response) => {
//
// // });
//
// // app.post('/characters/:characterId/hit_dice', async (request, response) => {
//
// // });
//
// // app.delete('/characters/:characterId/hit_dice/:id', async (request, response) => {
//
// // });
