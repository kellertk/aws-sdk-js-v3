import {
    isServiceMetadata,
    isSupportedProtocol,
    isSupportedSignatureVersion,
    pruneServiceMetadata,
} from "../../lib/ApiModel/ServiceMetadata";
import {minimalValidServiceMetadata} from "../../__fixtures__";

describe('isSupportedProtocol', () => {
    it('should reject non-string values', () => {
        for (let notAString of [null, void 0, 1, true, [], {}]) {
            expect(isSupportedProtocol(notAString)).toBe(false);
        }
    });

    it('should reject arbitrary strings', () => {
        for (let notAProtocol of ['foo', 'bar', 'baz', 'quux']) {
            expect(isSupportedProtocol(notAProtocol)).toBe(false);
        }
    });
});

describe('isSupportedSignatureVersion', () => {
    it('should reject non-string values', () => {
        for (let notAString of [null, void 0, 1, true, [], {}]) {
            expect(isSupportedSignatureVersion(notAString)).toBe(false);
        }
    });

    it('should reject arbitrary strings', () => {
        for (let notASignatureVersion of ['foo', 'bar', 'baz', 'quux']) {
            expect(isSupportedSignatureVersion(notASignatureVersion))
                .toBe(false);
        }
    });
});

describe('isServiceMetadata', () => {
    it('should accept a valid ServiceMetadata object', () => {
        expect(isServiceMetadata(minimalValidServiceMetadata)).toBe(true);
    });

    it('should reject objects where "apiVersion" is not a string', () => {
        expect(isServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {apiVersion: 1}
        ))).toBe(false);
    });

    it('should reject objects where "endpointPrefix" is not a string', () => {
        expect(isServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {endpointPrefix: 1}
        ))).toBe(false);
    });

    it('should reject objects where "protocol" is not a string', () => {
        expect(isServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {protocol: 1}
        ))).toBe(false);
    });

    it('should reject objects where "protocol" is a string but not a valid protocol', () => {
        expect(isServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {protocol: 'smtp'}
        ))).toBe(false);
    });

    it('should reject objects where "serviceFullName" is not a string', () => {
        expect(isServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {serviceFullName: 1}
        ))).toBe(false);
    });

    it('should reject objects where "signatureVersion" is not a string', () => {
        expect(isServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {signatureVersion: 1}
        ))).toBe(false);
    });

    it('should reject objects where "signatureVersion" is a string but not a valid signature version', () => {
        expect(isServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {signatureVersion: 'foo'}
        ))).toBe(false);
    });

    it('should reject objects where "uid" is not a string', () => {
        expect(isServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {uid: 1}
        ))).toBe(false);
    });

    it(
        'should reject objects where a "serviceAbbreviation" is present but is not a string',
        () => {
            expect(isServiceMetadata(Object.assign(
                {},
                minimalValidServiceMetadata,
                {serviceAbbreviation: 1}
            ))).toBe(false);
        }
    );

    it(
        'should reject objects where a "jsonVersion" is present but is not a string',
        () => {
            expect(isServiceMetadata(Object.assign(
                {},
                minimalValidServiceMetadata,
                {jsonVersion: 1}
            ))).toBe(false);
        }
    );

    it(
        'should reject objects where a "targetPrefix" is present but is not a string',
        () => {
            expect(isServiceMetadata(Object.assign(
                {},
                minimalValidServiceMetadata,
                {targetPrefix: 1}
            ))).toBe(false);
        }
    );

    it(
        'should reject objects where a "timestampFormat" is present but is not a string',
        () => {
            expect(isServiceMetadata(Object.assign(
                {},
                minimalValidServiceMetadata,
                {timestampFormat: 1}
            ))).toBe(false);
        }
    );

    it(
        'should reject objects where an "xmlNamespace" is present but is not a string',
        () => {
            expect(isServiceMetadata(Object.assign(
                {},
                minimalValidServiceMetadata,
                {xmlNamespace: 1}
            ))).toBe(false);
        }
    );

    it('should reject scalar values', () => {
        for (let scalar of [null, void 0, 1, 'string', true]) {
            expect(isServiceMetadata(scalar)).toBe(false);
        }
    });
});

describe('pruneServiceMetadata', () => {
    it('should return a new object', () => {
        const metadata = minimalValidServiceMetadata;
        const prunedMetadata = pruneServiceMetadata(metadata);
        expect(metadata).not.toBe(prunedMetadata);
    });

    it('should remove undefined fields', () => {
        expect(pruneServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {targetPrefix: undefined}
        ))).toEqual(minimalValidServiceMetadata)
    });

    it('should remove unrecognized fields', () => {
        expect(pruneServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {foo: 'bar'}
        ))).toEqual(minimalValidServiceMetadata);
    });
});