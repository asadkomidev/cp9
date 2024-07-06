import { CodeRepository } from "@/backend/repositories/code-repository";
import { ConversationRepository } from "@/backend/repositories/conversation-repository";
import { HelpersRepository } from "@/backend/repositories/helpers-repository";
import { ImagesRepository } from "@/backend/repositories/images-repository";
import { MusicRepository } from "@/backend/repositories/music-repository";
import { SubscriptionRepository } from "@/backend/repositories/subscription-repository";
import { UserRepository } from "@/backend/repositories/user-repository";
import { VideoRepository } from "@/backend/repositories/video-repository";

interface RepositoryMap {
  UserRepository?: UserRepository;
  ConversationRepository?: ConversationRepository;
  HelpersRepository?: HelpersRepository;
  SubscriptionRepository?: SubscriptionRepository;
  CodeRepository?: CodeRepository;
  ImagesRepository?: ImagesRepository;
  MusicRepository?: MusicRepository;
  VideoRepository?: VideoRepository;
}

export class RepositoryFactory {
  private static _repositoryCache: Partial<Record<keyof RepositoryMap, any>> =
    {};

  static getOrCreateRepository<T extends keyof RepositoryMap>(
    name: T,
  ): RepositoryMap[T] {
    let repository = this._repositoryCache[name];

    if (repository) {
      return repository;
    }

    repository = this.createRepository(name);

    this._repositoryCache[name] = repository;
    return repository;
  }

  private static createRepository<T extends keyof RepositoryMap>(
    name: T,
  ): RepositoryMap[T] {
    switch (name) {
      case "UserRepository":
        return new UserRepository() as RepositoryMap[T];
      case "ConversationRepository":
        return new ConversationRepository() as RepositoryMap[T];
      case "HelpersRepository":
        return new HelpersRepository() as RepositoryMap[T];
      case "SubscriptionRepository":
        return new SubscriptionRepository() as RepositoryMap[T];
      case "CodeRepository":
        return new CodeRepository() as RepositoryMap[T];
      case "ImagesRepository":
        return new ImagesRepository() as RepositoryMap[T];
      case "MusicRepository":
        return new MusicRepository() as RepositoryMap[T];
      case "VideoRepository":
        return new VideoRepository() as RepositoryMap[T];
      default:
        throw new Error(`Unknown repository: ${name}`);
    }
  }
}
