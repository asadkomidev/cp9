import { CodeService } from "../code-service";
import { ConversationService } from "../conversation-service";
import { HelpersService } from "../helpers-service";
import { ImagesService } from "../images-service";
import { MusicService } from "../music-service";
import { SubscriptionService } from "../subscription-service";
import { UserService } from "../user-service";
import { VideoService } from "../video-service";
import { ServiceFactory } from "./service-factory";

interface ServiceMap {
  UserService: UserService;
  ConversationService: ConversationService;
  HelpersService: HelpersService;
  SubscriptionService: SubscriptionService;
  CodeService: CodeService;
  ImagesService: ImagesService;
  MusicService: MusicService;
  VideoService: VideoService;
}

export class ServiceLocator {
  private static _serviceCache: Partial<Record<keyof ServiceMap, any>> = {};

  static getService<T extends keyof ServiceMap>(name: T): ServiceMap[T] {
    const service = this._serviceCache[name];

    if (service) {
      return service;
    }

    const createdService = this.createService(name);

    this._serviceCache[name] = createdService;
    return createdService;
  }

  private static createService<T extends keyof ServiceMap>(
    name: T,
  ): ServiceMap[T] {
    switch (name) {
      case "UserService":
        return ServiceFactory.createUserService() as ServiceMap[T];
      case "ConversationService":
        return ServiceFactory.createConversationService() as ServiceMap[T];
      case "HelpersService":
        return ServiceFactory.createHelpersService() as ServiceMap[T];
      case "SubscriptionService":
        return ServiceFactory.createSubscriptionService() as ServiceMap[T];
      case "CodeService":
        return ServiceFactory.createCodeService() as ServiceMap[T];
      case "ImagesService":
        return ServiceFactory.createImagesService() as ServiceMap[T];
      case "MusicService":
        return ServiceFactory.createMusicService() as ServiceMap[T];
      case "VideoService":
        return ServiceFactory.createVideoService() as ServiceMap[T];
      default:
        throw new Error(`Unknown service: ${name}`);
    }
  }
}
