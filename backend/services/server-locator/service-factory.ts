import { UserService } from "../user-service";
import { ConversationService } from "../conversation-service";
import { HelpersService } from "../helpers-service";
import { SubscriptionService } from "../subscription-service";
import { CodeService } from "../code-service";
import { ImagesService } from "../images-service";
import { MusicService } from "../music-service";
import { VideoService } from "../video-service";
import { RepositoryFactory } from "./repository-factory";

export class ServiceFactory {
  static createUserService(): UserService {
    const userRepository =
      RepositoryFactory.getOrCreateRepository("UserRepository")!;
    return new UserService(userRepository);
  }

  static createConversationService(): ConversationService {
    const conversationRepository = RepositoryFactory.getOrCreateRepository(
      "ConversationRepository",
    )!;
    return new ConversationService(conversationRepository);
  }

  static createHelpersService(): HelpersService {
    const helpersRepository =
      RepositoryFactory.getOrCreateRepository("HelpersRepository")!;
    return new HelpersService(helpersRepository);
  }

  static createSubscriptionService(): SubscriptionService {
    const subscriptionRepository = RepositoryFactory.getOrCreateRepository(
      "SubscriptionRepository",
    )!;
    return new SubscriptionService(subscriptionRepository);
  }

  static createCodeService(): CodeService {
    const codeRepository =
      RepositoryFactory.getOrCreateRepository("CodeRepository")!;
    return new CodeService(codeRepository);
  }

  static createImagesService(): ImagesService {
    const imagesRepository =
      RepositoryFactory.getOrCreateRepository("ImagesRepository")!;
    return new ImagesService(imagesRepository);
  }

  static createMusicService(): MusicService {
    const musicRepository =
      RepositoryFactory.getOrCreateRepository("MusicRepository")!;
    return new MusicService(musicRepository);
  }

  static createVideoService(): VideoService {
    const videoRepository =
      RepositoryFactory.getOrCreateRepository("VideoRepository")!;
    return new VideoService(videoRepository);
  }
}
