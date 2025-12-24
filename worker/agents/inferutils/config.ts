import { 
    AgentActionKey, 
    AgentConfig, 
    AgentConstraintConfig, 
    AIModels,
    AllModels,
    LiteModels,
    RegularModels,
} from "./config.types";
import { env } from 'cloudflare:workers';

// Common configs - ALL FEATURES ENABLED
const COMMON_AGENT_CONFIGS = {
    templateSelection: {
        name: AIModels.GEMINI_2_5_FLASH_LITE,
        max_tokens: 2000,
        fallbackModel: AIModels.GEMINI_2_5_FLASH,
        temperature: 0.6,
    },
    // ENABLED - Screenshot Analysis with Claude 4.5 Sonnet
    screenshotAnalysis: {
        name: AIModels.CLAUDE_4_5_SONNET,
        reasoning_effort: 'medium' as const,
        max_tokens: 8000,
        temperature: 1,
        fallbackModel: AIModels.GEMINI_2_5_FLASH,
    },
    // ENABLED - Realtime Code Fixer with Claude 4.5 Haiku
    realtimeCodeFixer: {
        name: AIModels.CLAUDE_4_5_HAIKU,
        reasoning_effort: 'low' as const,
        max_tokens: 32000,
        temperature: 1,
        fallbackModel: AIModels.GEMINI_2_5_FLASH,
    },
    // ENABLED - Fast Code Fixer with Grok 4 Fast
    fastCodeFixer: {
        name: AIModels.GROK_4_FAST,
        reasoning_effort: 'low' as const,
        max_tokens: 64000,
        temperature: 0.0,
        fallbackModel: AIModels.GEMINI_2_5_PRO,
    },
} as const;

const SHARED_IMPLEMENTATION_CONFIG = {
    reasoning_effort: 'low' as const,
    max_tokens: 48000,
    temperature: 0.2,
    fallbackModel: AIModels.GEMINI_2_5_PRO,
};

//======================================================================================
// PLATFORM CONFIG - All providers enabled (Google, Anthropic, OpenAI, Grok, Vertex)
//======================================================================================
const PLATFORM_AGENT_CONFIG: AgentConfig = {
    ...COMMON_AGENT_CONFIGS,
    blueprint: {
        name: AIModels.OPENAI_5_MINI,
        reasoning_effort: 'medium',
        max_tokens: 32000,
        fallbackModel: AIModels.CLAUDE_4_5_SONNET,
        temperature: 1.0,
    },
    projectSetup: {
        name: AIModels.GROK_4_FAST,
        reasoning_effort: 'medium',
        max_tokens: 8000,
        temperature: 1,
        fallbackModel: AIModels.CLAUDE_4_5_SONNET,
    },
    phaseGeneration: {
        name: AIModels.GROK_4_FAST,
        reasoning_effort: 'medium',
        max_tokens: 8000,
        temperature: 1,
        fallbackModel: AIModels.OPENAI_5_MINI,
    },
    firstPhaseImplementation: {
        name: AIModels.CLAUDE_4_5_SONNET,
        ...SHARED_IMPLEMENTATION_CONFIG,
        fallbackModel: AIModels.GEMINI_2_5_PRO,
    },
    phaseImplementation: {
        name: AIModels.GEMINI_2_5_PRO,
        ...SHARED_IMPLEMENTATION_CONFIG,
        fallbackModel: AIModels.CLAUDE_4_5_SONNET,
    },
    conversationalResponse: {
        name: AIModels.GROK_4_FAST,
        reasoning_effort: 'low',
        max_tokens: 4000,
        temperature: 1,
        fallbackModel: AIModels.CLAUDE_4_5_HAIKU,
    },
    deepDebugger: {
        name: AIModels.CLAUDE_4_5_SONNET,
        reasoning_effort: 'high',
        max_tokens: 8000,
        temperature: 1,
        fallbackModel: AIModels.OPENAI_5_MINI,
    },
    fileRegeneration: {
        name: AIModels.OPENAI_5_MINI,
        reasoning_effort: 'medium',
        max_tokens: 16000,
        temperature: 1,
        fallbackModel: AIModels.CLAUDE_4_5_HAIKU,
    },
};

//======================================================================================
// DEFAULT CONFIG - Gemini + Anthropic fallbacks
//======================================================================================
const DEFAULT_AGENT_CONFIG: AgentConfig = {
    ...COMMON_AGENT_CONFIGS,
    blueprint: {
        name: AIModels.GEMINI_2_5_PRO,
        reasoning_effort: 'medium',
        max_tokens: 64000,
        fallbackModel: AIModels.CLAUDE_4_5_SONNET,
        temperature: 0.7,
    },
    projectSetup: {
        name: AIModels.GEMINI_2_5_PRO,
        ...SHARED_IMPLEMENTATION_CONFIG,
        fallbackModel: AIModels.CLAUDE_4_5_SONNET,
    },
    phaseGeneration: {
        name: AIModels.GEMINI_2_5_PRO,
        ...SHARED_IMPLEMENTATION_CONFIG,
        fallbackModel: AIModels.CLAUDE_4_5_SONNET,
    },
    firstPhaseImplementation: {
        name: AIModels.GEMINI_2_5_PRO,
        ...SHARED_IMPLEMENTATION_CONFIG,
        fallbackModel: AIModels.CLAUDE_4_5_SONNET,
    },
    phaseImplementation: {
        name: AIModels.GEMINI_2_5_PRO,
        ...SHARED_IMPLEMENTATION_CONFIG,
        fallbackModel: AIModels.CLAUDE_4_5_SONNET,
    },
    conversationalResponse: {
        name: AIModels.GEMINI_2_5_FLASH,
        reasoning_effort: 'low',
        max_tokens: 4000,
        temperature: 0,
        fallbackModel: AIModels.CLAUDE_4_5_HAIKU,
    },
    deepDebugger: {
        name: AIModels.GEMINI_2_5_PRO,
        reasoning_effort: 'high',
        max_tokens: 8000,
        temperature: 0.5,
        fallbackModel: AIModels.CLAUDE_4_5_SONNET,
    },
    fileRegeneration: {
        name: AIModels.GEMINI_2_5_PRO,
        reasoning_effort: 'low',
        max_tokens: 32000,
        temperature: 0,
        fallbackModel: AIModels.CLAUDE_4_5_HAIKU,
    },
};

export const AGENT_CONFIG: AgentConfig = env.PLATFORM_MODEL_PROVIDERS 
    ? PLATFORM_AGENT_CONFIG 
    : DEFAULT_AGENT_CONFIG;


// ALL AGENT CONSTRAINTS - ALL MODELS ALLOWED
export const AGENT_CONSTRAINTS: Map<AgentActionKey, AgentConstraintConfig> = new Map([
	['fastCodeFixer', {
		allowedModels: new Set(AllModels),
		enabled: true,
	}],
	['realtimeCodeFixer', {
		allowedModels: new Set(AllModels),
		enabled: true,
	}],
	['screenshotAnalysis', {
		allowedModels: new Set(AllModels),
		enabled: true,
	}],
	['fileRegeneration', {
		allowedModels: new Set(AllModels),
		enabled: true,
	}],
	['phaseGeneration', {
		allowedModels: new Set(AllModels),
		enabled: true,
	}],
	['projectSetup', {
		allowedModels: new Set(AllModels),
		enabled: true,
	}],
	['conversationalResponse', {
		allowedModels: new Set(AllModels),
		enabled: true,
	}],
	['templateSelection', {
		allowedModels: new Set(AllModels),
		enabled: true,
	}],
	['blueprint', {
		allowedModels: new Set(AllModels),
		enabled: true,
	}],
	['firstPhaseImplementation', {
		allowedModels: new Set(AllModels),
		enabled: true,
	}],
	['phaseImplementation', {
		allowedModels: new Set(AllModels),
		enabled: true,
	}],
	['deepDebugger', {
		allowedModels: new Set(AllModels),
		enabled: true,
	}],
]);
