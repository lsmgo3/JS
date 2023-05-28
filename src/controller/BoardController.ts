import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { validate } from 'class-validator';
import Board from '../entity/board';

const db_list : any = ['number', 'contentid', 'id', 'name', 'topic', 'tag', 'like', 'unlike','createAt']

export default class BoardController {
  public async getAll(req: Request, res: Response) {
    try {
      const BoardRepository: Repository<Board> = getRepository(Board);
      const Boards = await BoardRepository.find({
        select: db_list,
      });
      return res.status(200).json({
        data: Boards,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async getOne(req: Request, res: Response) {
    try {
      const userRepository: Repository<Board> = getRepository(Board);
      const user = await userRepository.findOneOrFail(req.params.id, {
        select: db_list,
      });

      return res.status(200).json({
        data: user,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const userRepository: Repository<Board> = getRepository(Board);

      const board = new Board();
      board.number = req.body.number;
      board.contentid = req.body.contentid;
      board.topic = req.body.topic;
      board.tag = req.body.tag;



      const errors = await validate(board);
      if (errors.length > 0) {
        res.status(400).send(errors);
        return;
      }

      board.hashPassword();

      await userRepository.save(board);

      return res.status(200).json({
        data: board,
        message: 'User saved successfully',
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const userRepository: Repository<Board> = getRepository(Board);
      let user = await userRepository.findOneOrFail(req.params.id);
      let dataToUpdate = {
        ...req.body,
      };

      delete dataToUpdate.password;
      delete dataToUpdate.id;
      delete dataToUpdate.email;

      user = {
        ...user,
        ...dataToUpdate,
      };

      const errors = await validate(user);
      if (errors.length > 0) {
        res.status(400).send(errors);
        return;
      }

      await userRepository.save(user);

      return res.status(200).send({
        data: user,
        message: 'User updated successfully',
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async remove(req: Request, res: Response) {
    try {
      const userRepository: Repository<Board> = getRepository(Board);
      const user = await userRepository.findOneOrFail(req.params.id);
      await userRepository.remove(user);

      return res.status(200).json({
        data: user,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
