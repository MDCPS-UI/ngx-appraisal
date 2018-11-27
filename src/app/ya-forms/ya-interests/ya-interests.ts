/**
 * @interface
 */
interface InsertInterestsOptions {
    data: any;
    intrInfo: any;
    emailId: string;
}

/**
 * @constant
 */
export const getInterestsReqPayload: Function =
(opts: InsertInterestsOptions) => {
    return {
        progress: opts.intrInfo.progress,
        id: +(opts.intrInfo.id),
        appraisalId: +(opts.intrInfo.appraisalId || ''),
        completedBy: opts.emailId,
        isInvolved: opts.data.isInvolved,
        dance: opts.data.dance,
        cheerleading: opts.data.cheerleading,
        choirChorus: opts.data.choirChorus,
        band: opts.data.band,
        dramaTheater: opts.data.dramaTheater,
        baseball: opts.data.baseball,
        softball: opts.data.softball,
        football: opts.data.football,
        soccer: opts.data.soccer,
        track: opts.data.track,
        golf: opts.data.golf,
        basketball: opts.data.baseball,
        swimming: opts.data.swimming,
        other: opts.data.other,
        otherExplain: opts.data.otherExplain,
        participatesReligion: opts.data.participatesReligion,
        religionOtherExplain: opts.data.religionOtherExplain,
        hasClubsHobbies: opts.data.hasClubsHobbies,
        clubsHobbies: opts.data.clubsHobbies,
        listhobbies: opts.data.listhobbies,
        goals: opts.intrInfo.goals,
        concerns: opts.intrInfo.concerns
    }
}